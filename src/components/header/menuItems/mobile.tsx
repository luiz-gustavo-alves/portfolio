'use client'

import HamburguerMenu from '@/../public/assets/icons/hamburguer-menu.svg';
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HEADER_MENU_ITEMS } from '../utils/menuItems';
import Link from 'next/link';
import { useState } from 'react';
import { SOCIAL_MEDIA } from '@/lib/constants/socialMedia';
import { Separator } from "@/components/ui/separator"
import { useTranslations } from 'next-intl';

const HeaderMenuItemsMobile = () => {
  const t = useTranslations("HeaderItems");

  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Image
          src={HamburguerMenu}
          alt="Abrir Menu"
          className='dark:invert hover:cursor-pointer'
          onClick={() => setSheetOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="sr-only">
          menu
        </SheetTitle>
        <SheetClose asChild onClick={() => setSheetOpen(false)}>
          <div className="flex flex-col items-center justify-between h-full py-16">
            <div className="flex flex-col w-full h-full justify-center items-center gap-20">
              <div className="flex flex-col items-center gap-12">
                {HEADER_MENU_ITEMS.map(item => (
                  <div
                    key={t(`${item}.name`)}
                    className="px-4 lg:px-8 transition-all items-center"
                  >
                    <Link
                      href={t(`${item}.path`)}
                      className="text-xl duration-100 ease-in hover:border-b-brand-primary hover:dark:border-b-white hover:border-b-2 pb-1"
                    >
                      {t(`${item}.name`)}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full px-8">
              <Separator />
              <div className="flex justify-center gap-8">
                {Object.entries(SOCIAL_MEDIA).map(([key, { name, image, href }]) => (
                  <Link
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={image}
                      alt={name}
                      className="dark:invert w-8 h-8"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderMenuItemsMobile
