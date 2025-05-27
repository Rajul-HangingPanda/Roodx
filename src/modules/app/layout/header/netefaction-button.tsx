// Components
import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// Icons
import { Bell } from 'lucide-react';

export default function NetefactionButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="-lg:hidden rounded-full">
          <Bell className="h-5 w-5 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>1</DropdownMenuItem>
        <DropdownMenuItem>2</DropdownMenuItem>
        <DropdownMenuItem>3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
