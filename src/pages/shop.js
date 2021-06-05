import { BreadCrumbs, SideBar } from '@components/index';

const ShopScreen = () => {
  return (
    <>
      <BreadCrumbs items={['Shop']} />
      <div className='container grid grid-cols-4 gap-6 pt-4 pb-16 items-center'>
        <SideBar />
      </div>
    </>
  );
};

export default ShopScreen;
