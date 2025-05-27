import StoriesSidebar from '@/components/StoriesSidebar';
import PostInputCard from '@/components/PostInputCard';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#377DFF] z-50 flex items-center px-8 shadow-md">
      {/* You can add a logo or title here if needed */}
    </header>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#111]">
      <Header />
      <div className="pt-16 ">
        <StoriesSidebar />
      </div>
      <main className="flex-1 flex flex-col items-center pt-16">
        <PostInputCard />
        {/* Feed content would go here */}
      </main>
    </div>
  );
}
