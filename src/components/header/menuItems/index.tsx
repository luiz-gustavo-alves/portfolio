'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import HeaderMenuItemsDesktop from "./desktop";
import HeaderMenuItemsMobile from "./mobile";

const HeaderMenuItems = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <HeaderMenuItemsMobile />
      ) : (
        <HeaderMenuItemsDesktop />
      )}
    </>
  )
}

export default HeaderMenuItems