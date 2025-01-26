import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Team Members Data
const teamMembers = [
  { name: "Anvin", role: "CEO", slug: "Anvin" },
  { name: "Jane Smith", role: "CVO", slug: "jane-smith" },
  { name: "Mike Johnson", role: "Lead Developer", slug: "mike-johnson" },
  { name: "Hari", role: "CTO", slug: "Hari" },

]

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Lee",
    company: "Tech Innovators Inc.",
    feedback:
      "Nexoris transformed our business operations with their innovative solutions. Highly recommended!",
  },
  {
    name: "David Kim",
    company: "Global Enterprises",
    feedback:
      "Their expertise in AI and software development has been instrumental in our growth. Exceptional service!",
  },
  {
    name: "Emily Davis",
    company: "Creative Solutions",
    feedback:
      "The team at Nexoris is dedicated and highly skilled. They delivered beyond our expectations.",
  },
]

// Blog Posts Data
const blogPosts = [
  {
    title: "The Future of AI in Business",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing industries and driving growth.",
    link: "/blog/future-of-ai-in-business",
  },
  {
    title: "Top 10 Web Development Trends in 2025",
    excerpt:
      "Stay ahead with the latest trends shaping the web development landscape this year.",
    link: "/blog/web-development-trends-2025",
  },
  {
    title: "Building Scalable Mobile Applications",
    excerpt:
      "Best practices and strategies for developing mobile apps that scale with your business.",
    link: "/blog/scalable-mobile-apps",
  },
  {
    title: "Building Scalable VR systems",
    excerpt:
      "Best practices and strategies for developing VR systems that scale with your business.",
    link: "/blog/scalable-VR-systems",
  },
]

// Additional Projects Data
const additionalProjects = [
  {
    title: "Cloud Migration Service",
    description:
      "Seamless migration of your infrastructure to the cloud with minimal downtime.",
    tech: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Blockchain Integration",
    description:
      "Secure and transparent blockchain solutions tailored to your business needs.",
    tech: ["Ethereum", "Solidity", "React"],
  },
  {
    title: "IoT Platform Development",
    description:
      "Comprehensive IoT platforms for real-time data collection and analysis.",
    tech: ["Node.js", "MongoDB", "React Native"],
  },
]

// FAQs Data
const faqs = [
  {
    question: "What services does Nexoris offer?",
    answer:
      "We offer a wide range of services including AI Solutions, Software Development, Web Development, Mobile Development, Cloud Migration, Blockchain Integration, and IoT Platform Development.",
  },
  {
    question: "How can Nexoris help my business grow?",
    answer:
      "By providing innovative technology solutions tailored to your specific needs, we streamline processes, enhance team capabilities, and drive measurable results.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on the scope and complexity. We work closely with clients to establish realistic deadlines and ensure timely delivery.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-12 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none retro-text">
            <span className="block opacity-70">Where</span>
            <span className="block">Innovation</span>
            <span className="block opacity-70">Meets</span>
            <span className="block retro-glow">Scalability</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base tracking-wide leading-relaxed">
            Nexoris partners with businesses to design tools that simplify processes, empower teams, and deliver results in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              className="tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="default" className="tracking-wider transition-all duration-300">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Our Mission */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses through innovative technology solutions that drive growth and efficiency.
              </p>
            </div>
            
            {/* Our Vision */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading force in digital transformation, setting new standards in technological innovation.
              </p>
            </div>
            
            {/* Our Values */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Our Values</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Innovation at the core</li>
                <li>Client-centric approach</li>
                <li>Continuous learning and improvement</li>
                <li>Ethical and sustainable practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Solutions",
                description:
                  "Cutting-edge artificial intelligence solutions for business automation and optimization.",
              },
              {
                title: "Software Development",
                description:
                  "Custom software solutions tailored to your specific business needs and objectives.",
              },
              {
                title: "Web Development",
                description:
                  "Modern, responsive web applications built with the latest technologies.",
              },
              {
                title: "Mobile Development",
                description:
                  "Native and cross-platform mobile applications for iOS and Android.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border border-border rounded-lg hover:border-primary transition-colors bg-background"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Analytics",
                description: "Advanced analytics platform for real-time business insights.",
                tech: ["Python", "TensorFlow", "React"],
              },
              {
                title: "E-Commerce Platform",
                description: "Scalable e-commerce solution with modern architecture.",
                tech: ["Next.js", "Node.js", "MongoDB"],
              },
              {
                title: "Mobile Banking App",
                description: "Secure and intuitive mobile banking application.",
                tech: ["React Native", "TypeScript", "AWS"],
              },
              // Additional Projects
              ...additionalProjects,
            ].map((project) => (
              <div
                key={project.title}
                className="p-6 border border-border rounded-lg hover:border-primary transition-colors bg-background"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-lg bg-background shadow-md"
              >
                <p className="text-muted-foreground italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">From Our Blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={post.link} key={post.title}>
                <div className="p-6 border border-border rounded-lg hover:border-primary transition-colors bg-background">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-primary-foreground flex items-center">
                    Read More <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link href={`/team/${member.slug}`} key={member.slug}>
                <div className="p-6 border border-border rounded-lg hover:border-primary transition-colors bg-background">
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-muted-foreground text-sm text-center">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button type="submit" className="w-full tracking-wider">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
