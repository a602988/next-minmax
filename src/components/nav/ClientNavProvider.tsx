import { NavProvider } from '@/context/NavContext';
import { ReactNode } from 'react';

export default function ClientNavProvider({ children }: { children: ReactNode }) {
  return <NavProvider>{children}</NavProvider>;
}