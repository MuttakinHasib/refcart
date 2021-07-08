import axios from 'axios';
import { useCallback, useEffect, useState, memo } from 'react';
import { Image } from 'cloudinary-react';
import { useDropzone } from 'react-dropzone';
import { TrashIcon } from '@heroicons/react/outline';
import { getSignature } from '@utils/uploader';
import toast from 'react-hot-toast';
import { removeImage } from '@utils/api';
import Skeleton from 'react-loading-skeleton';

const FileUploader = ({ title, folderName, setPictures, defaultImages }) => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultImages) {
      setUploadedFile(prev => [...prev, ...defaultImages]);
      if (uploadedFile.length > 0) {
        setUploadedFile([...new Set(uploadedFile)]);
      }
    }
  }, [defaultImages]);

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true);
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Authorization: `Bearer ${userLogin.token}`,
      },
    };
    acceptedFiles.forEach(async acceptedFile => {
      try {
        const { signature, timestamp, folder } = await getSignature(folderName);
        const formData = new FormData();
        formData.append('file', acceptedFile);
        formData.append('folder', folder);
        formData.append('signature', signature);
        formData.append('timestamp', timestamp);
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

        const { data } = await axios.post(URL, formData, config);
        setLoading(false);

        const { public_id, height, weight, secure_url, url } = data;
        setUploadedFile(prev => [
          ...prev,
          { public_id, height, weight, secure_url, url },
        ]);
      } catch (err) {
        setLoading(false);
      }
    });
  }, []);

  const handleRemove = async id => {
    toast.promise(removeImage(id), {
      loading: 'Deleting...',
      success: data => {
        setUploadedFile(images =>
          images.filter(image => image.public_id !== id)
        );
        return data.message;
      },
      error: 'Failed',
    });
  };

  useEffect(() => {
    setPictures(uploadedFile);
  }, [uploadedFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  return (
    <div className='rounded p-8 bg-white'>
      <h1 className='text-2xl text-gray-700 text-center'>{title}</h1>
      <p className='text-xs mt-3 font-light text-gray-500 text-center'>
        File should be PNG, JPEG or JPG
      </p>
      <div className='mt-8'>
        <div
          className='cursor-pointer bg-blue-50/50 border-2 border-blue-500 border-dashed rounded-md h-44 flex flex-col items-center justify-center max-w-sm mx-auto'
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <img
            src='/images/icons/file.png'
            alt=''
            className={`w-14 md:w-20 transition duration-300 ${
              isDragActive ? 'scale-110' : ''
            }`}
          />
          <div className='mt-2 text-xs text-gray-400 font-light text-center'>
            Drag & Drop your files here
          </div>
        </div>
      </div>
      {(loading || uploadedFile.length > 0) && (
        <div className='flex items-center gap-3 mt-8 flex-wrap'>
          {uploadedFile.map(image => (
            <div key={image.public_id} className='group relative transition'>
              <Image
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={image.public_id}
                height='150'
                crop='scale'
              />
              <button
                className='absolute hidden -right-2 transition -top-1 rounded-full w-9 h-9 text-red-500 group-hover:flex items-center justify-center border border-red-200 bg-white'
                onClick={() => handleRemove(image.public_id)}
              >
                <TrashIcon className='w-6 h-6' />
              </button>
            </div>
          ))}
          {loading && <Skeleton width={150} height={150} />}
        </div>
      )}
    </div>
  );
};

export default memo(FileUploader);
