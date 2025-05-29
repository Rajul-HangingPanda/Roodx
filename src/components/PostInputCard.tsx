import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

const actions = [
  { label: 'Photo/Video', img: '/images/photo.png' },
  { label: 'Location', img: '/images/location.png' },
  { label: 'Reel', img: '/images/reel.png' },
  { label: 'Poll', img: '/images/poll.png' },
  { label: 'Live', img: '/images/live.png' },
  { label: 'Job', img: '/images/job.png' },
  { label: 'Tag people', img: '/images/tagpeople.png' },
];

export default function PostInputCard() {
  return (
    <section className="bg-[#000000] dark:bg-[#111] p-6 w-[95%] md:w-4/5 md:mt-4 mt-14 mb-8 border border-[#0DE03E] shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <Avatar>
          <AvatarImage src="/images/user1.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400 text-base px-2 py-2"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex sm:flex-wrap gap-2 border-t border-gray-800 pt-4">
        {actions.map(({ label, img }) => (
          <Button 
            key={label} 
            variant="ghost" 
            size="sm" 
            className="text-gray-300 hover:text-white flex items-center gap-2 justify-start"
          >
            <img src={img} alt={label} className="size-5 rounded" />
            <span className="text-sm text-[#cccccc] font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </section>
  );
} 