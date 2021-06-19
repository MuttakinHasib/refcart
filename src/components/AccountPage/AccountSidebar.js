import { GiftIcon, AdjustmentsIcon, HeartIcon } from '@heroicons/react/outline';
import ActiveLink from './ActiveLink';

const AccountSidebar = () => {
  return (
    <div className='divide-y divide-gray-200 space-y-5'>
      <div>
        <ActiveLink
          href='/account'
          className={'flex items-center gap-2 mt-4 mb-3'}
        >
          <AdjustmentsIcon className='w-6' />
          <h2 className='text-xl font-medium'>Manage My Account</h2>
        </ActiveLink>
        <div className='ml-8 flex flex-col gap-2'>
          <ActiveLink href='/account/profile-information'>
            Profile Information
          </ActiveLink>
          <ActiveLink href='/account/manage-address'>Manage Address</ActiveLink>
          <ActiveLink href='/account/change-password'>
            Change Password
          </ActiveLink>
        </div>
      </div>
      <div>
        <ActiveLink
          href='/account/orders'
          className={'flex items-center gap-2 mt-4 mb-3'}
        >
          <GiftIcon className='w-6' />
          <h2 className='text-xl font-medium'>Order History</h2>
        </ActiveLink>
        <div className='ml-8 flex flex-col gap-2'>
          <ActiveLink href='/account/returns'>My Returns</ActiveLink>
          {/* <ActiveLink href='/account/orders/cancels'>
            My Cancellations
          </ActiveLink> */}
          <ActiveLink href='/account/reviews'>My Reviews</ActiveLink>
        </div>
      </div>
      <div>
        <ActiveLink
          href='/account/wishlist'
          className={'flex items-center gap-2 mt-4 mb-3'}
        >
          <HeartIcon className='w-6' />
          <h2 className='text-xl font-medium'>My Wishlist</h2>
        </ActiveLink>
      </div>
    </div>
  );
};

export default AccountSidebar;
