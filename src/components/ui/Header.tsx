import React from 'react'
import { NewspaperIcon, SearchIcon } from '../icons/page'
import { Input } from '@/components/ui/input'
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <NewspaperIcon className="h-6 w-6" />
            <span>Startup Blog</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="aboutus" className="text-sm font-medium hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Articles
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="h-8 w-[200px] rounded-md bg-muted pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:w-[300px]"
            />
          </div>
        </div>
      </header>
  )
}
