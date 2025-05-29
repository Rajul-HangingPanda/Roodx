// Components
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
// Modules
import Breadcrumbs from '@/modules/app/layout/breadcrumbs';
import SiteHeader from '@/modules/app/layout/header';
import SidebarLeft from '@/modules/app/layout/sidebar/sidebar-left';
import SidebarRight from '@/modules/app/layout/sidebar/sidebar-right';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="[--header-height:calc(--spacing(12))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <SidebarLeft />
          <SidebarInset>
            <Breadcrumbs />
            <div className="flex flex-1 flex-col gap-4 p-4">
              {children}
              {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="bg-muted/50 aspect-video rounded-xl" />
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
            </div>
          </SidebarInset>
          {/* <SidebarRight side="right" /> */}
        </div>
      </SidebarProvider>
    </div>
  );
}
