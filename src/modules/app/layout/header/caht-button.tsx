// Components
import { Button } from '@/components/ui/button';
// Icons
import { MessageSquare } from 'lucide-react';

export default function CahtButton() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <MessageSquare className="h-5 w-5 text-white" />
      <span className="sr-only">Chat</span>
    </Button>
  );
}
