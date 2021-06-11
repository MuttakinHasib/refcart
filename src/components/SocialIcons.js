import {
  Facebook,
  Twitter,
  Github,
  Linkedin,
} from '@icons-pack/react-simple-icons';

const SocialIcons = () => {
  return (
    <div className='flex items-center space-x-6'>
      <a href='' className='text-gray-400 hover:text-[#1877F2] transition'>
        <Facebook />
      </a>
      <a href='' className='text-gray-400 hover:text-[#1DA1F2] transition'>
        <Twitter />
      </a>
      <a href='' className='text-gray-400 hover:text-[#181717] transition'>
        <Github />
      </a>
      <a href='' className='text-gray-400 hover:text-[#0A66C2] transition'>
        <Linkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
