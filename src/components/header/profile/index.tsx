import Link from 'next/link'
import Image from 'next/image'
import ProfileImage from '@/../public/assets/images/profile.jpg';
import { Paths } from '@/lib/paths';
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProfileProps {
  showName?: boolean;
  imageClassName?: string;
}

const HeaderProfile = ({
  showName = true,
  imageClassName,
}: HeaderProfileProps) => {
  return (
    <Link href={Paths.Home}>
      <div className="flex items-center gap-4 transition-all group">
        <Image
          src={ProfileImage}
          alt="Luiz Gustavo Alves"
          className={cn("w-10 h-10 lg:w-14 lg:h-14 rounded-full", imageClassName)}
        />
        {showName && (
          <h1 className="text-sm xsm:text-base lg:text-lg duration-200 ease-in group-hover:text-brand-primary">
            LUIZ GUSTAVO ALVES
          </h1>
        )}
      </div>
    </Link>
  )
}

export default HeaderProfile