import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <Link href="/" passHref legacyBehavior>
          <a className="font-semibold text-xl text-gray-800">NextTS Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
