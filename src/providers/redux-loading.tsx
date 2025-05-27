'use client';
import { useEffect, useState } from 'react';
import { useLoadUserQuery } from '@/store/api/apiSlice';

export default function ReduxLoader({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isClient, setIsClient] = useState(false);
  const { isLoading } = useLoadUserQuery({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-background">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
