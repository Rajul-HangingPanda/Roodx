'use client';
import Image from 'next/image';
import Link from 'next/link';
// components
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
// Modules
import SearchButton from '@/modules/app/layout/header/search-button';
import NetefactionButton from '@/modules/app/layout/header/netefaction-button';
import CahtButton from '@/modules/app/layout/header/caht-button';
import NavUserButton from '@/modules/app/layout/header/nav-user-button';
// Icons
import { Search, SidebarIcon } from 'lucide-react';

export default function SiteHeader() {
  return (
    <header className="bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/75 sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center justify-center gap-2 lg:w-56">
          <div className="flex justify-center gap-2 ">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <Image src="/images/logo-white.svg" alt="Roodx Logo" width={120} height={38} priority className="object-cover" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <SearchButton />
          <NetefactionButton />
          <CahtButton />
          <NavUserButton />
        </div>
      </div>
    </header>
  );
}
