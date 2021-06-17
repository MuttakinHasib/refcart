import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();

  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href ? 'text-primary' : 'text-gray-800'
        }  hover:text-primary ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;
