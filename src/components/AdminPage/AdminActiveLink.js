import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminActiveLink = ({ children, href, className }) => {
  const router = useRouter();

  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname.includes(href)
            ? 'border-blue-600 bg-gray-900'
            : 'border-transparent'
        }  flex gap-3 items-center px-4 py-3 text-white hover:border-blue-600 hover:bg-gray-900 border-l-4 transition ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default AdminActiveLink;
