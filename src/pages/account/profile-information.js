import moment from 'moment';
import { Button } from '@components/index';
import { attemptUpdateProfile } from '@features/user/userActions';
import { PencilIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const ProfileInformationScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [isDisabled, setIsDisabled] = useState(true);
  const { handleSubmit, register } = useForm();

  const onSubmit = async data => {
    try {
      dispatch(attemptUpdateProfile(data));
      setIsDisabled(prev => !prev);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='flex items-center pb-4 mb-5 justify-between gap-1 flex-wrap border-b border-gray-100'>
        <h2 className='text-xl capitalize text-gray-800 font-medium'>
          Profile Information
        </h2>
        {isDisabled && (
          <button
            className='focus:outline-none flex items-center'
            onClick={() => setIsDisabled(prev => !prev)}
          >
            <PencilIcon className='w-4 mr-2' />
            Edit
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='name' className='text-gray-600 mb-2 block'>
              Name
            </label>
            <input
              required
              type='text'
              name='name'
              id='name'
              defaultValue={user.name || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder='Enter full name'
              {...register('name', { required: true })}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='text-gray-600 mb-2 block'>
              Email Address
            </label>
            <input
              required
              type='email'
              name='email'
              id='email'
              disabled
              defaultValue={user.email || ''}
              className='block bg-gray-100 w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400'
              placeholder='example@mail.com'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='birthday' className='text-gray-600 mb-2 block'>
              Birthday
            </label>
            <input
              required
              type='date'
              name='birthday'
              id='birthday'
              defaultValue={moment(user.birthday).format('YYYY-MM-DD') || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder='Enter birthday'
              {...register('birthday', { required: true })}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='gender' className='text-gray-600 mb-2 block'>
              Gender
            </label>
            <select
              required
              name='gender'
              id='gender'
              defaultValue={user.gender || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('gender', { required: true })}
            >
              <option>Select gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='phone' className='text-gray-600 mb-2 block'>
              Phone
            </label>
            <input
              required
              type='text'
              name='phone'
              id='phone'
              defaultValue={user.phone || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder='Enter phone number'
              {...register('phone', { required: true })}
            />
          </div>
          <div className='w-full'>
            <label htmlFor='country' className='text-gray-600 mb-2 block'>
              Country
            </label>
            <select
              required
              name='country'
              id='country'
              defaultValue={user?.address?.country || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('country', { required: true })}
            >
              <option>Select country</option>
              <option selected value='Bangladesh'>
                Bangladesh
              </option>
            </select>
          </div>
        </div>
        {!isDisabled && (
          <div className='flex items-center gap-3 flex-wrap'>
            <button
              className='focus:outline-none uppercase font-medium rounded border-2 border-bg-gray-200 px-5 py-2 space-x-2 text-primary hover:bg-opacity-80 transition '
              onClick={() => setIsDisabled(prev => !prev)}
            >
              Cancel
            </button>
            <Button label='Save' submit />
          </div>
        )}
      </form>
    </>
  );
};

export default ProfileInformationScreen;
