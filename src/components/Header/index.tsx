"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Link
            href="/"
          >
            <Image
              src="/images/logo-light.svg"
              alt="logo"
              width={140}
              height={30}
            />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header;