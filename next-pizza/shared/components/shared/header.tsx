'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { AuthModal, CartButton, Container, ProfileButton, SearchInput } from '.';
import { User } from 'lucide-react';
import Link from 'next/link';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession, signIn } from 'next-auth/react';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'The order is successfully paid! Information was sent to the email.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Mail is successfully confirmed!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn(' border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* left part */}
        <Link href="/">
          <div>
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <div className="text-sm text-gray-400 leading-3">Absolutely delicious</div>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* right part */}
        <div className="flex items-center gap-3">
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
