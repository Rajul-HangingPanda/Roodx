'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// Components
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ name: string; href: string }>>([]);

  // Generate breadcrumbs from pathname
  useEffect(() => {
    if (pathname) {
      const paths = pathname.split('/').filter(Boolean);
      const crumbs = paths.map((path, index) => ({
        name: path.charAt(0).toUpperCase() + path.slice(1),
        href: `/${paths.slice(0, index + 1).join('/')}`,
      }));
      setBreadcrumbs(crumbs);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
      <div className="flex flex-1 items-center gap-2 px-3 py-3 h-full">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-2" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Roodx</BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>{index === breadcrumbs.length - 1 ? <BreadcrumbPage>{crumb.name}</BreadcrumbPage> : <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>}</BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
