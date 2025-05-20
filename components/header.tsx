"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-navy-700">Sinem Odalı Belen</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/") ? "text-navy-700" : "text-gray-500"}`}
          >
            Anasayfa
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/about") ? "text-navy-700" : "text-gray-500"}`}
          >
            Hakkımda
          </Link>
          <Link
            href="/expertise"
            className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/expertise") ? "text-navy-700" : "text-gray-500"}`}
          >
            Uzmanlıklar
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/blog") ? "text-navy-700" : "text-gray-500"}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/contact") ? "text-navy-700" : "text-gray-500"}`}
          >
            İletişim
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-navy-700 hover:bg-navy-800">Get In Touch</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col space-y-3 py-4 px-4 md:px-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/") ? "text-navy-700" : "text-gray-500"}`}
              onClick={toggleMenu}
            >
              Anasayfa
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/about") ? "text-navy-700" : "text-gray-500"}`}
              onClick={toggleMenu}
            >
              Hakkımda
            </Link>
            <Link
              href="/expertise"
              className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/expertise") ? "text-navy-700" : "text-gray-500"}`}
              onClick={toggleMenu}
            >
              Uzmanlıklar
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/blog") ? "text-navy-700" : "text-gray-500"}`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-navy-700 ${isActive("/contact") ? "text-navy-700" : "text-gray-500"}`}
              onClick={toggleMenu}
            >
              İletişim
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <Button className="w-full bg-navy-700 hover:bg-navy-800">Get In Touch</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
