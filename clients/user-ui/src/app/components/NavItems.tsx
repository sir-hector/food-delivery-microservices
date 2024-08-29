import Link from "next/link";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "restaurans",
    url: "/restaurants",
  },
  {
    title: "Popular Foods",
    url: "/foods",
  },
  {
    title: "Contact us",
    url: "/contact",
  },
];

const NavItems = ({ activeItem }: { activeItem?: number }) => {
  return (
    <div>
      {navItems.map((item, index) => {
        return (
          <Link
            key={item.url}
            href={item.url}
            className={`px-5 text-[18px] font-Poppins font-[500] ${
              activeItem === index && "text-[#37b688]"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
