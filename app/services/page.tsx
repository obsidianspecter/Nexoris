export default function Services() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "AI Solutions",
              description: "Cutting-edge artificial intelligence solutions for business automation and optimization.",
            },
            {
              title: "Software Development",
              description: "Custom software solutions tailored to your specific business needs and objectives.",
            },
            {
              title: "Web Development",
              description: "Modern, responsive web applications built with the latest technologies.",
            },
            {
              title: "Mobile Development",
              description: "Native and cross-platform mobile applications for iOS and Android.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 border border-border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

