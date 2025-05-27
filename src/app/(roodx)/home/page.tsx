// Modules
import PostInputCard from '@/components/PostInputCard';
import StoriesSidebar from '@/components/StoriesSidebar';
// import AuthGuard from '@/modules/auth/authGuard'; // Unused
// import ReduxLoader from '@/providers/redux-loading'; // Unused

export default function Home() {
  return (
    <div className="flex min-h-[70vh] bg-[#111]  px-4 ">
      <StoriesSidebar />
      <div className="flex-1 flex flex-col items-center">
        <PostInputCard />
        {/* Feed content would go here */}
      </div>
    </div>
  );
}
