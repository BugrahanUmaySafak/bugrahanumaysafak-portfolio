"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "umay@example.com",
    href: "mailto:umay@example.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 555 123 45 67",
    href: "tel:+905551234567",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "İstanbul, Türkiye",
    href: "#",
    color: "from-red-500/20 to-rose-500/20",
  },
];

export function HomeContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current?.children || [], {
        y: 80,
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

      // Form animation
      gsap.from(formRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Contact info animation
      gsap.from(contactRef.current?.children || [], {
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
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
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5"
    >
      <Container>
        <div ref={contentRef} className="text-center mb-20 space-y-6">
          <Badge variant="outline" className="px-6 py-3 text-lg font-medium">
            İletişim
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Birlikte <span className="text-primary">Çalışalım</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projeleriniz için benimle iletişime geçin. Size en kısa sürede dönüş
            yapacağım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-card/60 backdrop-blur-sm p-10 rounded-3xl border-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Mesaj Gönder</h3>
            </div>

            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-lg font-medium mb-3 block">
                    Ad Soyad
                  </label>
                  <Input
                    placeholder="Adınız ve soyadınız"
                    className="h-14 text-lg rounded-2xl border-2 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-lg font-medium mb-3 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    className="h-14 text-lg rounded-2xl border-2 focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg font-medium mb-3 block">Konu</label>
                <Input
                  placeholder="Mesaj konusu"
                  className="h-14 text-lg rounded-2xl border-2 focus:border-primary/50"
                />
              </div>

              <div>
                <label className="text-lg font-medium mb-3 block">Mesaj</label>
                <Textarea
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  className="text-lg rounded-2xl border-2 focus:border-primary/50 resize-none"
                />
              </div>

              <Button className="w-full h-16 text-xl rounded-2xl shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Send className="w-6 h-6 mr-3" />
                Mesaj Gönder
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">İletişim Bilgileri</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Projeleriniz hakkında konuşmak için benimle iletişime
                geçebilirsiniz. Her türlü sorunuz için buradayım.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-6 p-6 bg-card/60 backdrop-blur-sm rounded-2xl border-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg text-muted-foreground">{label}</p>
                    <p className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold text-primary">
                  Hızlı Yanıt Garantisi
                </h4>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Genellikle 24 saat içinde mesajlara yanıt veriyorum. Acil
                durumlar için telefon numaramı kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
