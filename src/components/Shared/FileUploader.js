import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ title, setPictures }) => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

    acceptedFiles.forEach(async acceptedFile => {
      const { signature, timestamp, folder } = await getSignature();
      const formData = new FormData();
      formData.append('file', acceptedFile);
      formData.append('folder', folder);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

      const { data } = await axios.post(url, formData);
      console.log(data);
      setUploadedFile(prev => [...prev, data]);
    });
  }, []);

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
      <div className='my-8'>
        <div
          className='cursor-pointer bg-blue-50/50 border-2 border-blue-500 border-dashed rounded-md h-44 flex flex-col items-center justify-center max-w-sm mx-auto'
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <img src='/images/icons/file.png' alt='' className='w-14 md:w-20' />
          <div className='mt-2 text-xs text-gray-400 font-light text-center'>
            Drag & Drop your files here
          </div>
        </div>
      </div>
      <div className='flex items-center gap-3 flex-wrap'>
        {uploadedFile.map(image => (
          <Image
            key={image.public_id}
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={image.public_id}
            height='150'
            crop='scale'
          />
        ))}
      </div>
    </div>
  );
};

export default FileUploader;

const getSignature = async () => {
  const { data } = await axios.get('/api/cloudinary/sign');
  const { signature, timestamp, folder } = data;
  return { signature, timestamp, folder };
};
