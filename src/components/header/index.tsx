import HeaderMenuItems from "./menuItems"
import HeaderProfile from "./profile"

const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full bg-white box-shadow-header">
      <div className="flex justify-between gap-4 tracking-wider sm:tracking-widest font-brand-book py-4 px-8 lg:px-20 max-w-[1920px] mx-auto">
        <HeaderProfile />
        <HeaderMenuItems />
      </div>
    </header>
  )
}

export default Header