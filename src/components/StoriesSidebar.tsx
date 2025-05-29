'use client'
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Menu } from 'lucide-react';

const stories = [
  { name: 'My Status', time: 'Today at 12:15 PM', img: '/images/user1.png' },
  { name: 'Jesse Hughes', time: 'Today at 12:15 PM', img: '/images/user2.png' },
  { name: 'Carla Rivas', time: 'Today at 12:15 PM', img: '/images/user3.png' },
  { name: 'Nina Brewer', time: 'Today at 12:15 PM', img: '/images/user4.png' },
  { name: 'Joel Mack', time: 'Today at 12:15 PM', img: '/images/user5.png' },
  { name: 'Toni Jimenez', time: 'Today at 12:15 PM', img: '/images/user6.png' },
];

export default function StoriesSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="md:px-2 lg:px-4">
      <button
        ref={buttonRef}
        className="md:hidden fixed top-[90px] left-3.5 z-50 p-1 bg-[#151515] text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="size-4" />
      </button>
      <aside
        ref={sidebarRef}
        className={`
          bg-[#151515] dark:bg-[#111] p-4 text-white border border-[#0DE03E] md:mt-4 mt-30 shadow-lg transition-transform duration-300 ease-in-out
          fixed top-0 left-0 h-full z-40 w-64
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:w-64 md:min-h-[80vh] md:h-auto
        `}
      >
        <h2 className="text-lg font-medium text-[#bfbfbf] mb-4">Stories</h2>
        <ul className="space-y-4">
          {stories.map((story) => (
            <li key={story.name} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={story.img} alt={story.name} />
                <AvatarFallback>{story.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-normal text-base text-[#cccccc] leading-tight">{story.name}</div>
                <div className="text-xs text-gray-400">{story.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
} 