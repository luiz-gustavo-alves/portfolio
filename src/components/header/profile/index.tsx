import Link from 'next/link'
import Image from 'next/image'
import ProfileImage from '@/../public/assets/images/profile.jpg';
import { Paths } from '@/lib/paths';
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProfileProps {
  showImage?: boolean;
  showName?: boolean;
  imageClassName?: string;
  hasOrder?: boolean;
}

const HeaderProfile = ({
  showImage = true,
  showName = true,
  imageClassName,
  hasOrder = true,
}: HeaderProfileProps) => {
  return (
    <Link
      href={Paths.Home}
      className={hasOrder ? "order-2 md:order-1" : ''}
    >
      <div className="flex items-center gap-4">
        {showImage && (
          <Image
            src={ProfileImage}
            alt="Luiz Gustavo Alves"
            className={cn("w-10 h-10 lg:w-14 lg:h-14 rounded-full", imageClassName)}
          />
        )}
        {showName && (
          <h1 className="text-base lg:text-lg transition-colors font-bold">
            LUIZ GUSTAVO ALVES
          </h1>
        )}
      </div>
    </Link>
  )
}

export default HeaderProfile