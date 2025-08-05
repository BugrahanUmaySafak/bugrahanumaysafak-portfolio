"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-ticaret platformu. Next.js, TypeScript ve Stripe entegrasyonu ile geliştirildi. Responsive tasarım ve SEO optimizasyonu.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Takım çalışması için geliştirilmiş görev yönetim uygulaması. Real-time güncellemeler ve bildirimler.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Kişisel portfolio websitesi. Modern tasarım ve animasyonlar ile geliştirildi.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "GSAP", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function HomeProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Projects animation with 3D effect
      gsap.from(projectsRef.current?.children || [], {
        y: 120,
        opacity: 0,
        rotationX: 45,
        scale: 0.8,
        duration: 1.5,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-muted/10 to-background"
    >
      <Container>
        <div ref={headerRef} className="text-center mb-20 space-y-6">
          <Badge variant="outline" className="px-6 py-3 text-lg font-medium">
            Projelerim
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Seçilmiş <span className="text-primary">Çalışmalar</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Geliştirdiğim bazı projeler ve kullandığım teknolojiler
          </p>
        </div>

        <div ref={projectsRef} className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl bg-card border-2 group-hover:border-primary/30 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay with buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full shadow-2xl">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Canlı Demo
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full bg-white/10 backdrop-blur-sm border-white/20"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Kod
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {project.featured && (
                  <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                    Öne Çıkan Proje
                  </Badge>
                )}

                <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="group/btn rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25">
                    Detayları Gör
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 text-xl rounded-full bg-transparent border-2 hover:bg-primary/5"
          >
            Tüm Projeleri Gör
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
