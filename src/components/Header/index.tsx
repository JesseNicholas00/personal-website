"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationItem } from '@/types/navigation_item';

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false
  }
]

const Header = () => {
  return (
    <>
      <header className="header left-0 top-0 z-40 flex w-full items-center">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-40 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className="mx-2"
              >
                <Image
                  src="/images/logo-light.svg"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <nav className="class navbar absolute">
                <ul className="block lg:flex lg:space-x-12">
                  {navigationItems.map((navigationItem, index) => (
                    <li key={index} className="group relative">
                      <Link
                        className="flex py-2 text-base lgmr-0 lg:inline-flex lg:px-0 lg:px-6"
                        href={navigationItem.path}
                      >
                        {navigationItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;