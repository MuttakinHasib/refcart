import { SectionTitle, WishlistItem } from '@components/index';

const WishlistScreen = () => {
  return (
    <>
      <SectionTitle label='Wishlist' />
      <div className='space-y-6'>
        <WishlistItem />
      </div>
    </>
  );
};

export default WishlistScreen;
