"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Container } from "@/components/Container";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInUpVariants,
  scaleInVariants,
} from "@/lib/framer-variants";

const contactSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir email adresi giriniz"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Konu seçiniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
  budget: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "Web Sitesi Geliştirme",
  "Mobil Uygulama",
  "E-ticaret Projesi",
  "API Geliştirme",
  "Danışmanlık",
  "Diğer",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data:", data);
      setIsSubmitted(true);
      toast.success("Mesajınız gönderildi!", {
        description: "En kısa sürede size geri dönüş yapacağım.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Bir hata oluştu!", {
        description: "Lütfen tekrar deneyiniz.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20 pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleInVariants}
            className="text-center mx-auto"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Mesajınız Gönderildi!</h1>
            <p className="text-muted-foreground mb-8">
              Teşekkürler! Mesajınızı aldım ve en kısa sürede size geri dönüş
              yapacağım.
            </p>
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-10 overflow-x-hidden">
      {" "}
      {/* Added min-h-screen, pt-20, pb-10 */}
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            İletişime Geçin
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Projeniz hakkında konuşmak için sabırsızlanıyorum. Aşağıdaki formu
            doldurarak bana ulaşabilir veya doğrudan iletişim bilgilerimi
            kullanabilirsiniz.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeftVariants}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">umay@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+90 555 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Konum</h3>
                    <p className="text-muted-foreground">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-4 md:p-6">
              <h3 className="font-semibold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Pazartesi - Cuma
                  </span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cumartesi</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pazar</span>
                  <span className="text-muted-foreground">Kapalı</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRightVariants}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  Proje Hakkında Konuşalım
                </CardTitle>
                <CardDescription>
                  Projenizin detaylarını paylaşın, size en uygun çözümü birlikte
                  bulalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>İsim Soyisim *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Adınız ve soyadınız"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="ornek@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+90 555 123 45 67"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Proje Konusu *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Proje türünü seçin" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {subjects.map((subject) => (
                                  <SelectItem key={subject} value={subject}>
                                    {subject}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mesajınız *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Projeniz hakkında detayları paylaşın..."
                              className="min-h-[100px] md:min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Mesajı Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
