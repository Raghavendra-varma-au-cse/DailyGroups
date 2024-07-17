import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Articles</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Explore the latest insights, strategies, and resources for entrepreneurs, startups, and small
                  businesses.
                </p>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image src="/placeholder.svg" alt="Articles Image" className="object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold md:text-3xl">Latest Articles</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Unlocking the Secrets of Startup Success</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Discover the key strategies and insights that can help your startup thrive.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Navigating the Funding Landscape for Startups</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Explore the different funding options available to startups and how to secure the right investment.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Building a Winning Marketing Strategy for Your Startup</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn how to create a marketing strategy that will help your startup stand out in a crowded market.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Scaling Your Startup: Strategies for Growth</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Discover proven strategies to help your startup scale effectively and sustainably.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Fostering a Positive Startup Culture</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Learn how to build a thriving startup culture that empowers your team and drives success.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-center p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Article Image"
                    width={400}
                    height={225}
                    className="mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-bold">Leveraging Data to Drive Startup Growth</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Discover how to use data-driven insights to make informed decisions and accelerate your startups
                    growth.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}