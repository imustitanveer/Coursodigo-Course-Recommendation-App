'use client';

import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export default function AuthenticatedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
      } catch (err) {
        console.log('User not authenticated');
        setIsAuthenticated(false);
        router.replace('/signup'); // 🔁 redirect to login/signup
      } finally {
        setCheckingAuth(false);
      }
    };

    checkUser();
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return <>{isAuthenticated ? children : null}</>;
}