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
    <section className="h-screen">
      <div className="h-full overflow-y-auto max-h-screen p-4 sm:p-6 md:p-8">
        <Container className="py-16 sm:py-20 md:py-24">
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
              variants={staggerContainerVariants} // Stagger for cards
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <motion.div
                variants={itemScaleInSpringVariants} // Scale in for each card
                className="bg-card/50 backdrop-blur-sm border rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 mx-auto" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-lg sm:text-xl">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm">
                  Detaylı proje bilgileri için
                </p>
              </motion.div>
              <motion.div
                variants={itemScaleInSpringVariants} // Scale in for each card
                className="bg-card/50 backdrop-blur-sm border rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <User className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 mx-auto" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-lg sm:text-xl">
                  Consultation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ücretsiz proje danışmanlığı
                </p>
              </motion.div>
              <motion.div
                variants={itemScaleInSpringVariants} // Scale in for each card
                className="bg-card/50 backdrop-blur-sm border rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 mx-auto" />
                <h3 className="font-semibold mb-1 sm:mb-2 text-lg sm:text-xl">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  24 saat içinde geri dönüş
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemFadeInUpVariants} // Fade in for buttons
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  <Send className="w-4 h-4 mr-2" />
                  İletişime Geç
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                <Mail className="w-4 h-4 mr-2" />
                umay@example.com
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
