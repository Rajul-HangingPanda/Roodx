'use client';
import { usePathname } from 'next/navigation';
// Components
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
// Modules
import { NavMain } from '@/modules/app/layout/sidebar/nav-main';
// Icons
import { Home, Inbox, Search, Sparkles } from 'lucide-react';

const data = {
  navMain: [
    {
      title: 'Home',
      url: '/home',
      icon: Search,
    },
    {
      title: 'Jobs',
      url: '/job',
      icon: Sparkles,
    },
    {
      title: 'Videos',
      url: '/video',
      icon: Home,
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: Inbox,
    },
  ],
};

export default function SidebarLeft({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  // Automatically set isActive
  const navMainWithActive = data.navMain.map((item) => ({
    ...item,
    isActive: pathname.startsWith(item.url),
  }));
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainWithActive} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
