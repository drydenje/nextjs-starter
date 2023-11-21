import Link from 'next/link';

const NavBar = () => {
  return (
    <nav
      role="navigation"
      aria-label="Site Navigation"
      className="grid-in-nav flex flex-row 
    items-center justify-end p-4 text-sm pr-0"
    >
      <ul
        className="flex flex-row justify-around backdrop-blur-3xl 
      tracking-widest items-center w-[55%] h-[60px]"
      >
        {[
          ['00', 'Home', '/'],
          ['01', 'Destination', '/destination'],
          ['02', 'Crew', '/crew'],
          ['03', 'Technology', '/technology'],
        ].map(([num, title, url]) => (
          <li
            className="my-0 mx-0 uppercase font-sansCondensed text-base font-normal"
            key={title}
          >
            <Link href={url}>
              <span className="my-0 mx-2 font-bold">{num}</span>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
