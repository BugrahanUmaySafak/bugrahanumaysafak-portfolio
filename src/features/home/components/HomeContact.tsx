"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Link from "next/link";

export function HomeContact() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Container>
        <motion.div
          className="text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bir Proje Fikriniz Var mı?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Modern web teknolojileriyle hayalinizdeki projeyi birlikte hayata
            geçirelim. Size en uygun çözümü bulmak için buradayım.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                Detaylı proje bilgileri için
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <User className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Ücretsiz proje danışmanlığı
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <Send className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                24 saat içinde geri dönüş
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
    </section>
  );
}
