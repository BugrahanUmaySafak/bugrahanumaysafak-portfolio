"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Link from "next/link";
import {
  fadeInUpVariants,
  itemFadeInUpVariants,
  itemScaleInSpringVariants,
  staggerContainerVariants,
} from "@/lib/framer-variants";

export function HomeContact() {
  return (
    <section className="h-full">
      {/* Scrollbar appears only when content overflows */}
      <div className="h-full p-4 sm:p-6 md:p-8 overflow-y-auto md:overflow-y-visible max-h-[calc(100dvh-80px)] supports-[height:100svh]:max-h-[calc(100svh-80px)] md:max-h-none">
        <Container className="min-h-full flex flex-col justify-center py-12 sm:py-16 md:py-20">
          <motion.div
            className="text-center mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <motion.div
              variants={itemFadeInUpVariants}
              className="flex items-center justify-center gap-2 mb-4 sm:mb-6"
            >
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                İletişime Geçin
              </span>
            </motion.div>
            <motion.h2
              variants={itemFadeInUpVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Bir Proje Fikriniz Var mı?
            </motion.h2>
            <motion.p
              variants={itemFadeInUpVariants}
              className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto"
            >
              Modern web teknolojileriyle hayalinizdeki projeyi birlikte hayata
              geçirelim. Size en uygun çözümü bulmak için buradayım.
            </motion.p>

            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              {[
                {
                  Icon: Mail,
                  title: "Email",
                  text: "Detaylı proje bilgileri için",
                },
                {
                  Icon: User,
                  title: "Consultation",
                  text: "Ücretsiz proje danışmanlığı",
                },
                {
                  Icon: Send,
                  title: "Quick Response",
                  text: "24 saat içinde geri dönüş",
                },
              ].map(({ Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={itemScaleInSpringVariants}
                  className="bg-card/50 backdrop-blur-sm border rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 mx-auto" />
                  <h3 className="font-semibold mb-1 sm:mb-2 text-lg sm:text-xl">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemFadeInUpVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  <Send className="w-4 h-4 mr-2" />
                  İletişime Geç
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                asChild
              >
                <a href="mailto:umay@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  umay@example.com
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
