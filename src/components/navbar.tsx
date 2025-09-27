import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="w-full flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex gap-6 items-center">
          <h2>tony qiu</h2>
          <div className="flex gap-2">
            <Link
              href="https://github.com/tonyqiu123"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/icons/logos/github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tonyqiu1/"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/icons/logos/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="mailto:tqiu@uwaterloo.ca"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
            </Link>
          </div>
        </div>
        <p className="text-zinc-400">Management Engineering @ UWaterloo</p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/blog"
          className="h-fit text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="h-fit text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          Contact
        </Link>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
