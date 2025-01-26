import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Anvin",
    role: "CEO",
    image: "/team/ceo.jpg",
    slug: "Anvin",
    bio: "Anvin is the visionary CEO of Nexoris, with over 5 years of experience in the tech industry. He's passionate about leveraging technology to solve complex business challenges.",
  },
  {
    name: "Jane Smith",
    role: "CVO",
    image: "/team/cto.jpg",
    slug: "jane-smith",
    bio: "Jane Smith, our brilliant CTO, has a track record of developing cutting-edge solutions. She leads our technical strategy and ensures we stay at the forefront of innovation.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/team/lead-dev.jpg",
    slug: "mike-johnson",
    bio: "Mike Johnson, our Lead Developer, is a coding wizard with a knack for solving complex problems. He oversees our development team and ensures the highest quality in our software delivery.",
  },
  {
    name: "Hari",
    role: "CTO",
    image: "/team/lead-dev.jpg",
    slug: "Hari",
    bio: "Hari, our Lead Developer, is a coding wizard with a knack for solving complex problems. He oversees our development team and ensures the highest quality in our software delivery.",
  },
]

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  // Find the index of the current member to navigate to previous and next members
  const currentIndex = teamMembers.findIndex((m) => m.slug === params.slug)
  const prevMember = teamMembers[currentIndex - 1] || teamMembers[teamMembers.length - 1]
  const nextMember = teamMembers[currentIndex + 1] || teamMembers[0]

  return (
    <div className="min-h-screen py-12 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/#team" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Team
          </Link>
        </Button>

        {/* Team Member Details */}
        <div className="bg-background border border-border rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Team Member Image */}
            <div className="flex-shrink-0">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 md:mb-0 md:mr-8"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Team Member Information */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          </div>

          {/* Navigation to Other Team Members */}
          <div className="mt-8 flex justify-between">
            <Link href={`/team/${prevMember.slug}`} className="flex items-center text-primary-foreground hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {prevMember.name}
            </Link>
            <Link href={`/team/${nextMember.slug}`} className="flex items-center text-primary-foreground hover:underline">
              {nextMember.name}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
