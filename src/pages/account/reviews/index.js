import { SectionTitle, ReviewItem } from '@components/index';

const ReviewsScreen = () => {
  return (
    <>
      <SectionTitle label='Reviews' />
      <div className='space-y-6'>
        <ReviewItem />
      </div>
    </>
  );
};

export default ReviewsScreen;
