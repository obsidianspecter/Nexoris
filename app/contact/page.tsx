import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full tracking-wider">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

