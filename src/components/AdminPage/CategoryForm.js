import { getCategories } from '@utils/api';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral0,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const CategoryForm = ({ formId, onFormSubmit, defaultValues }) => {
  const { data: categories, isLoading } = useQuery('categories', getCategories);

  const { handleSubmit, register } = useForm({ defaultValues });
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (defaultValues) {
      setCategory(defaultValues.category);
    }
  }, [defaultValues]);

  const handleCategoryChange = (newValue, actionMeta) => {
    if (newValue) {
      setCategory(newValue);
    }
    if (actionMeta.action === 'clear') {
      setCategory(null);
    }
  };
  // Handle Submit
  const onSubmit = data => {
    onFormSubmit({
      ...data,
      ...category,
    });
  };
  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-5'>
        <div className='w-full'>
          <label htmlFor='category' className='text-gray-600 mb-2 block'>
            Category
          </label>
          <CreatableSelect
            isClearable
            onChange={handleCategoryChange}
            defaultValue={defaultValues?.category || ''}
            options={categories}
            styles={customStyles}
            placeholder='Type category name'
          />
        </div>
        <div className='w-full'>
          <label htmlFor='description' className='text-gray-600 mb-2 block'>
            Description
          </label>
          <textarea
            required
            type='text'
            name='description'
            id='description'
            rows='3'
            className={`bg-gray-100 block w-full border border-transparent px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400`}
            placeholder='Enter your product description'
            {...register('description', { required: true })}
          />
        </div>
      </div>
    </form>
  );
};

export default CategoryForm;
