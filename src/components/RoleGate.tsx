'use client';

import { useUser } from '@/lib/hooks/use-user';

export function RoleGate({ children, requiredRole }: { 
  children: React.ReactNode;
  requiredRole: 'songwriter' | 'assistant';
}) {
  const { user } = useUser();

  if (user?.role !== requiredRole) {
    return (
      <div className="p-4 text-red-500">
        Unauthorized: This section requires {requiredRole} privileges
      </div>
    );
  }

  return <>{children}</>;
} 