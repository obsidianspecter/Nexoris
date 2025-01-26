export default function Projects() {
  return (
    <section className="py-24">
      <div className="container px-4">
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
          ].map((project) => (
            <div
              key={project.title}
              className="p-6 border border-border rounded-lg hover:border-primary transition-colors"
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
  )
}

