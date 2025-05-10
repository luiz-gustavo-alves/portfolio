import Link from "next/link";
import { HEADER_MENU_ITEMS } from "../utils/menuItems";

const HeaderMenuItemsDesktop = () => {
  return (
    <div className="flex justify-center items-center">
      {HEADER_MENU_ITEMS.map(item => (
        <div
          key={item.name}
          className="px-4 lg:px-8 transition-all"
        >
          <Link
            href={item.path}
            className="text-sm lg:text-base duration-100 ease-in hover:border-b-brand-primary hover:dark:border-b-white hover:border-b-2 pb-1"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HeaderMenuItemsDesktop