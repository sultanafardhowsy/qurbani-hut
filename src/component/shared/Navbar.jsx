'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import userAvatar from "@/assets/user.png";
import logo from "@/assets/qurbani1.png";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter()
  const handleLogout = async () => {
    await authClient.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <nav className="bg-white border-b-2 border-[#D4AF37] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={150}
            className="object-contain w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:gap-4 lg:gap-8 text-[#0F3D2E] font-semibold text-sm md:text-base lg:text-lg">
          <Link href="/" className="hover:text-[#C9A227] transition-colors">
            Home
          </Link>
          <Link
            href="/all-animals"
            className="hover:text-[#C9A227] transition-colors"
          >
            All Animals
          </Link>

        </div>

        {/* Desktop User/Auth */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {isPending ? (
            <span className="text-[#0F3D2E] text-sm md:text-base">
              Loading...
            </span>
          ) : user ? (
            <>
              <h2 className="hidden lg:block font-semibold text-[#0F3D2E] text-sm lg:text-base">
                {user.name}
              </h2>

              <Image
                src={user?.image || userAvatar}
                alt={user?.name || "User avatar"}
                width={40}
                height={40}
                className="rounded-full md:w-[40px] lg:w-[50px] object-cover"
                referrerPolicy="no-referrer"
              />
              <Link
                href="/profile"
                className="hover:text-[#C9A227] transition-colors"
              >
                Profile
              </Link>
              <button
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-3 sm:px-4 md:px-5 lg:px-6 py-2 rounded-lg font-bold shadow-md text-xs sm:text-sm md:text-base"
                onClick={handleLogout}

              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex gap-2 lg:gap-4">
              <Link
                href="/login"
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-3 sm:px-4 md:px-5 lg:px-6 py-2 rounded-lg font-bold shadow-md text-xs sm:text-sm md:text-base"
              >
                Log In
              </Link>

              <Link
                href="/register"
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#B8941F] hover:to-[#C9A227] text-[#0F3D2E] px-3 sm:px-4 md:px-5 lg:px-6 py-2 rounded-lg font-bold shadow-md text-xs sm:text-sm md:text-base"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0F3D2E] text-2xl sm:text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D4AF37] px-4 sm:px-6 py-4 space-y-4 shadow-lg">

          {/* Mobile Links */}
          <div className="flex flex-col gap-3 text-[#0F3D2E] font-semibold text-sm sm:text-base">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/all-animals" onClick={() => setMenuOpen(false)}>
              All Animals
            </Link>
          </div>

          {/* Mobile User/Auth */}
          {isPending ? (
            <span className="block text-[#0F3D2E]">Loading...</span>
          ) : user ? (
            <div className="flex flex-col gap-3 pt-3 border-t">
              <div className="flex items-center gap-3">
                <Image
                  src={userAvatar}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h2 className="font-semibold text-[#0F3D2E] text-sm sm:text-base">
                  {user.name}
                </h2>
              </div>
              <Link
                href="/profile"
                className="hover:text-[#C9A227] transition-colors"
              >
                Profile
              </Link>
              <button
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-[#0F3D2E] px-4 py-2 rounded-lg font-bold shadow-md text-sm"
                onClick={async () => {
                  await authClient.signOut();
                  window.location.href = "/";
                  setMenuOpen(false);

                }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-3 border-t">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-[#0F3D2E] px-4 py-2 rounded-lg font-bold shadow-md text-center text-sm"
              >
                Log In
              </Link>

              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-[#0F3D2E] px-4 py-2 rounded-lg font-bold shadow-md text-center text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;