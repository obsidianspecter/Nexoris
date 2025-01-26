export default function About() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses through innovative technology solutions that drive growth and efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading force in digital transformation, setting new standards in technological innovation.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Core Values</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Innovation at Heart</li>
                <li>Client-Centric Approach</li>
                <li>Excellence in Delivery</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

