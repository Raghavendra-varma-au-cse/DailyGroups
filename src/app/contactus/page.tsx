import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BuildingIcon, MapPinIcon, PhoneIcon, MailIcon } from "@/components/icons/page"
import Image from "next/image"

export default function Component() {   
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have a question or need assistance? Fill out the form and we get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Our Address</h2>
            <p className="text-muted-foreground">Visit us at our office or contact us by phone or email.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BuildingIcon className="h-5 w-5 text-muted-foreground" />
              <span>Acme Inc.</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span>123 Main St, Anytown USA 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <span>+1 (555) 555-5555</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <span>info@acme.com</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Map"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

