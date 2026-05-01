'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";


const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  console.log(session, "session");

  const user = session?.user;

  console.log(user, "user");
  return (
    <nav className="bg-white border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#0F3D2E]">
          <span>🌙</span>
          <span><span className="text-[#C9A227]">Qurbani</span>Hat</span>
        </div>

        <div className="hidden md:flex gap-8 text-[#0F3D2E] font-semibold">
          <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
          <Link href="/all-animals" className="hover:text-[#C9A227] transition-colors">All Animals</Link>

        </div>

       
        {isPending ? ("Loading...") : user ? (
          <div className="flex items-center gap-2">
            <h2>{user.name}</h2>

            <Image
              src={userAvatar}
              alt="User avatar"
              width={60}
              height={60}
            />
            <button className="btn bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md"
              onClick={async () => await authClient.signOut()}>
              Log out
            </button>
          </div>

        ) : (
          
           <div className='flex justify-between gap-4'>
          <button className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md">
            <Link href={'/login'}>Log In</Link>
          </button>
          <button className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-6 py-2.5 rounded-lg font-bold shadow-md">
            <Link href={"/register"}>Register</Link>
          </button>

        </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;