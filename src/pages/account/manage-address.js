import { Button } from '@components/index';
import { attemptUpdateProfile } from '@features/user/userActions';
import { PencilIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const ManageAddressScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [isDisabled, setIsDisabled] = useState(true);
  const { divisions, districts, upazilas, unions } = useSelector(
    state => state.countryData
  );
  const { handleSubmit, register, watch } = useForm();

  // find division id
  const division_id = divisions.findIndex(
    division => division.name === watch('division')
  );

  // filter cities/districts by division id
  const cities = districts.filter(
    district => Number(district.division_id) === division_id + 1
  );

  // find district id
  const district_id = districts.findIndex(
    division => division.name === watch('district')
  );

  // filter upazila by district id
  const upazila = upazilas.filter(
    item => Number(item.district_id) === district_id + 1
  );

  // find upazila id
  const upazila_id = upazilas.findIndex(
    upazila => upazila.name === watch('upazila')
  );

  // filter unions by upazila id
  const union = unions.filter(
    item => Number(item.upazilla_id) === upazila_id + 1
  );

  // Handle form submit & dispatch update user profile
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
      <div className='flex items-center pb-4 mb-5 justify-between border-b border-gray-100'>
        <h2 className='text-xl capitalize text-gray-800 font-medium'>
          Manage Address
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
            <label htmlFor='country' className='text-gray-600 mb-2 block'>
              Country
            </label>
            <select
              required
              name='country'
              id='country'
              disabled={isDisabled}
              defaultValue={user?.address?.country || ''}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('country', { required: true })}
            >
              <option>Select country</option>
              <option selected>Bangladesh</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='division' className='text-gray-600 mb-2 block'>
              Division
            </label>

            <select
              required
              name='division'
              id='division'
              defaultValue={user?.address?.division || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('division', { required: true })}
            >
              <option>Select division</option>
              {divisions.map(division => (
                <option
                  key={division.id}
                  value={division.name}
                  className='py-2 px-3'
                >
                  {division.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='district' className='text-gray-600 mb-2 block'>
              District
            </label>
            <select
              required
              name='district'
              id='district'
              defaultValue={user?.address?.district || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('district', { required: true })}
            >
              <option>Select district</option>
              {cities.length > 0
                ? cities.map(district => (
                    <option
                      key={district.id}
                      value={district.name}
                      className='py-5'
                    >
                      {district.name}
                    </option>
                  ))
                : districts.map(district => (
                    <option
                      key={district.id}
                      value={district.name}
                      className='py-5'
                    >
                      {district.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='upazila' className='text-gray-600 mb-2 block'>
              Upazila
            </label>
            <select
              required
              name='upazila'
              id='upazila'
              defaultValue={user?.address?.upazila || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('upazila', { required: true })}
            >
              <option>Select upazila</option>
              {upazila.length > 0
                ? upazila.map(item => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))
                : upazilas.map(item => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5'>
          <div className='w-full'>
            <label htmlFor='union' className='text-gray-600 mb-2 block'>
              Union
            </label>
            <select
              required
              name='union'
              id='union'
              defaultValue={user?.address?.union || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('union', { required: true })}
            >
              <option selected>Select union</option>
              {union.length > 0
                ? union.map(item => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))
                : unions.map(item => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='postcode' className='text-gray-600 mb-2 block'>
              Postcode
            </label>
            <input
              required
              type='text'
              name='postcode'
              id='postcode'
              defaultValue={user?.address?.postcode || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder='Enter postcode'
              {...register('postcode', { required: true })}
            />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor='street' className='text-gray-600 mb-2 block'>
            Village / Street
          </label>
          <textarea
            required
            type='text'
            name='street'
            id='street'
            rows='5'
            defaultValue={user?.address?.street || ''}
            disabled={isDisabled}
            className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
              isDisabled ? 'bg-gray-100' : ''
            }`}
            placeholder='Enter your village/street'
            {...register('street', { required: true })}
          />
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

export default ManageAddressScreen;
