import { ThemeSwitch } from "../theme/switch"
import HeaderMenuItems from "./menuItems"
import HeaderProfile from "./profile"

const Header = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-around items-center gap-4 tracking-wider sm:tracking-widest font-brand-book py-4 max-w-[1920px] mx-auto">
        <HeaderProfile
          showImage={false}
        />
        <HeaderMenuItems />
        <div className="order-2 sm:order-3">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header