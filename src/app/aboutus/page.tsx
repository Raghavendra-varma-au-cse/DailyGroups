import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {TwitterIcon, LinkedinIcon, GitlabIcon } from "@/components/icons/page"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Startup Blog</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Startup Blog is a leading online platform dedicated to providing entrepreneurs, startups, and small
                  businesses with the latest insights, strategies, and resources to help them succeed.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our mission is to empower the startup community by sharing valuable content, connecting industry
                  leaders, and fostering a collaborative environment. We believe that by sharing knowledge and best
                  practices, we can help startups navigate the challenges of building and growing their businesses.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read Articles
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Explore Startups
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg" alt="About Us Image" className="object-cover"/>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Our Team</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Avatar className="mb-4 h-20 w-20 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Co-Founder and CEO</p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <GitlabIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Avatar className="mb-4 h-20 w-20 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Co-Founder and CTO</p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <GitlabIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Avatar className="mb-4 h-20 w-20 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">Sarah Lee</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Head of Content</p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <TwitterIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <LinkedinIcon className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:text-foreground" prefetch={false}>
                      <GitlabIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

