"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const menuItems = [
  { href: "#why", label: "Why Us?" },
  { href: "#invest", label: "Invest" },
  { href: "#raise", label: "Raise" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" mx-auto py-4 px-4 flex items-center justify-between relative">
      <Link href="/" className="flex items-center">
        <Image src="/images/marginplus-logo.png" alt="Marginplus Logo" width={120} height={40} className="h-8 w-auto" />
      </Link>

      {/* Desktop Menu */}
      <div className="flex items-center font-bold space-x-8">
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-black hover:text-green-700 text-sm">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-started"
          className="bg-green-700 hidden md:flex text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-700 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
         
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full justify-center items-center bg-white shadow-md px-4 py-4 z-50 md:hidden flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-black hover:text-green-700 text-sm">
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-green-700 w-[150px] text-center text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
