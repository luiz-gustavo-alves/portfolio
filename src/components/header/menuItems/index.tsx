'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import HeaderMenuItemsDesktop from "./desktop";
import HeaderMenuItemsMobile from "./mobile";

const HeaderMenuItems = () => {
  const isMobile = useIsMobile();
  return (
    <div className="orde-3 sm:order-2">
      {isMobile ? (
        <HeaderMenuItemsMobile />
      ) : (
        <HeaderMenuItemsDesktop />
      )}
    </div>
  )
}

export default HeaderMenuItems