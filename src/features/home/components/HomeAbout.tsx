"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Modern web teknolojileri ile end-to-end çözümler geliştiriyorum",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Kullanıcı deneyimini ön planda tutan tasarımlar oluşturuyorum",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Hızlı ve optimize edilmiş web uygulamaları geliştiriyorum",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Agile metodolojiler ile takım çalışmasında deneyimliyim",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Test-driven development ile kaliteli kod yazıyorum",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Karmaşık problemlere yaratıcı çözümler üretiyorum",
    color: "from-amber-500/20 to-yellow-500/20",
  },
];

export function HomeAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills cards animation with more dramatic effect
      gsap.from(skillsRef.current?.children || [], {
        y: 150,
        opacity: 0,
        rotation: 10,
        scale: 0.8,
        duration: 1.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
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
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5"
    >
      <Container>
        <div ref={contentRef} className="text-center mb-20 space-y-8">
          <Badge variant="outline" className="px-6 py-3 text-lg font-medium">
            Hakkımda
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Tutkulu bir <span className="text-primary">geliştirici</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            5+ yıllık deneyimimle modern web teknolojilerini kullanarak,
            kullanıcı odaklı ve performanslı uygulamalar geliştiriyorum. Sürekli
            öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
          </p>
        </div>

        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-8 bg-card/60 backdrop-blur-sm rounded-3xl border-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-4 hover:scale-105 cursor-pointer"
            >
              <div className="mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
