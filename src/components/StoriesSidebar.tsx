import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const stories = [
  { name: 'My Status', time: 'Today at 12:15 PM', img: '/images/user1.png' },
  { name: 'Jesse Hughes', time: 'Today at 12:15 PM', img: '/images/user2.png' },
  { name: 'Carla Rivas', time: 'Today at 12:15 PM', img: '/images/user3.png' },
  { name: 'Nina Brewer', time: 'Today at 12:15 PM', img: '/images/user4.png' },
  { name: 'Joel Mack', time: 'Today at 12:15 PM', img: '/images/user5.png' },
  { name: 'Toni Jimenez', time: 'Today at 12:15 PM', img: '/images/user6.png' },
];

export default function StoriesSidebar() {
  return (
    <div className='p-2 '>
    <aside className="bg-[#151515] dark:bg-[#111]  p-4 w-64 min-h-[80vh] text-white border border-[#0DE03E] mt-4 shadow-lg">
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