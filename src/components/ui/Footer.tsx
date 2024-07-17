import React from 'react'
import Link from "next/link"
import { NewspaperIcon, TwitterIcon, LinkedinIcon, GitlabIcon } from "../icons/page"

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <NewspaperIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Startup Blog</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                <GitlabIcon className="h-5 w-5" />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
  )
}
