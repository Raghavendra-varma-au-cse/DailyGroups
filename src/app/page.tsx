import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { UserIcon, CalendarIcon } from "@/components/icons/page"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:px-8">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg" alt="Hero Image" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Revolutionize Your Business with Our Startup Blog
                </h1>
                <p className="mt-4 text-lg text-white md:text-xl">
                  Discover the latest trends, insights, and strategies to help your startup thrive.
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
            </div>
            <div className="grid gap-6">
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg" alt="Featured Article 1" className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white md:text-2xl">
                    The Rise of No-Code: Empowering Entrepreneurs to Build Their Dreams
                  </h2>
                </div>
              </div>
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg" alt="Featured Article 2" className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white md:text-2xl">
                    The Future of Remote Work: Insights from Industry Leaders
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Latest Articles</h2>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Article 1"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      The Rise of No-Code: Empowering Entrepreneurs to Build Their Dreams
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Discover how no-code platforms are revolutionizing the way startups and small businesses build
                      their digital products.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        <span>John Doe</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>May 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Article 2"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">The Future of Remote Work: Insights from Industry Leaders</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explore the latest trends and best practices for successful remote work strategies in the
                      post-pandemic era.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        <span>Jane Smith</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>April 28, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Article 3"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      Startup Spotlight: How Acme Inc. is Revolutionizing the Industry
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Get an inside look at the innovative strategies and technologies driving the success of Acme Inc.,
                      a leading startup in the industry.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        <span>Sarah Lee</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>March 10, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Startup Showcase</h2>
              <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                View Startups
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Startup 1"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Acme Inc.</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Revolutionizing the industry with innovative solutions.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Established 2018</span>
                      </div>
                      <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Startup 2"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Globex Corporation</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Pioneering the future of technology and innovation.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Established 2015</span>
                      </div>
                      <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Image
                    src="/placeholder.svg"
                    alt="Startup 3"
                    width={400}
                    height={225}
                    className="rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Stark Industries</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Shaping the future of technology and innovation.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Established 2010</span>
                      </div>
                      <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
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
