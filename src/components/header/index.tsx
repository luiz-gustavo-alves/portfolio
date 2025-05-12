import { ThemeSwitch } from "../theme/switch"
import HeaderMenuItems from "./menuItems"
import HeaderProfile from "./profile"

const Header = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center gap-4 tracking-wider md:tracking-widest font-brand-book px-4 md:px-12 py-4 max-w-[1920px] mx-auto">
        <HeaderProfile
          showImage={false}
        />
        <HeaderMenuItems />
        <div className="order-2 md:order-3">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header