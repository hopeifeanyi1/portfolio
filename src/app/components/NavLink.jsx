import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="relative text-gray-600 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors duration-300 group"
      onClick={onClick}
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default NavLink;
