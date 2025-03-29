import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { saveContactForm } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { PinterestIcon, BlueskyIcon, YouTubeIcon } from "@/components/icons/custom-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CTASection() {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return saveContactForm(values);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: FormValues) {
    const db = getFirestore();
    addDoc(collection(db, "contact-requests"), {
      ...values,
      createdAt: new Date()
    }).then(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    }).catch((error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    });
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-800 dark:bg-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl">
              {t('home.cta.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{t('home.cta.emailUs')}</h3>
                  <p className="text-white">info@muretta.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{t('home.cta.callUs')}</h3>
                  <p className="text-white">1(833)-MURETTA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{t('home.cta.visitUs')}</h3>
                  <p className="text-white">
                    4120 Ave. de Courtrai<br />Montréal Québec H3S 1C2
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">{t('home.cta.workingHours')}</h3>
                  <p className="text-white">
                    {t('home.cta.workingHoursWeekday')}<br />{t('home.cta.workingHoursWeekend')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/company/muretta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/muretta_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/muretta.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/murettaca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.pinterest.com/muretta_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/muretta.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="Bluesky"
              >
                <BlueskyIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@muretta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors mb-2"
                aria-label="YouTube"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {t('home.cta.formTitle')}
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">{t('home.cta.form.nameLabel')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('home.cta.form.namePlaceholder')} 
                              {...field} 
                              className="bg-white/90 text-slate-900 dark:bg-slate-700 dark:text-white" 
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
                          <FormLabel className="text-slate-700 dark:text-slate-300">{t('home.cta.form.emailLabel')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('home.cta.form.emailPlaceholder')} 
                              type="email" 
                              {...field} 
                              className="bg-white/90 text-slate-900 dark:bg-slate-700 dark:text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">{t('home.cta.form.phoneLabel')}</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('home.cta.form.phonePlaceholder')} 
                              {...field} 
                              className="bg-white/90 text-slate-900 dark:bg-slate-700 dark:text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 dark:text-slate-300">{t('home.cta.form.serviceLabel')}</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value} 
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white/90 text-slate-900 dark:bg-slate-700 dark:text-white">
                                <SelectValue placeholder={t('home.cta.form.servicePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sip">SIP Panels</SelectItem>
                              <SelectItem value="csf">Concrete Steel Frame</SelectItem>
                              <SelectItem value="timber">Timber Frame</SelectItem>
                              <SelectItem value="wpc">WPC Cladding</SelectItem>
                              <SelectItem value="aluminum">Aluminum Cladding</SelectItem>
                              <SelectItem value="terracotta">Terracotta Cladding</SelectItem>
                              <SelectItem value="greenhouse">Solar Greenhouse</SelectItem>
                              <SelectItem value="prefab">Prefabricated Construction</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-slate-700 dark:text-slate-300">{t('home.cta.form.messageLabel')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('home.cta.form.messagePlaceholder')} 
                            rows={4} 
                            {...field} 
                            className="bg-white/90 text-slate-900 dark:bg-slate-700 dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full relative"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('home.cta.form.submitting')}
                      </>
                    ) : mutation.isSuccess ? (
                      <>
                        <svg className="-ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t('home.cta.form.submit')}
                      </>
                    ) : mutation.isError ? (
                      <>
                        <svg className="-ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {t('home.cta.form.submit')}
                      </>
                    ) : (
                      t('home.cta.form.submit')
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
