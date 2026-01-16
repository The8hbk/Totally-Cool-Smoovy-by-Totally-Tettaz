import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, IceCream, Mail } from "lucide-react";

export default function TotallyCoolSmoovyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-300 via-sky-200 to-white text-slate-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Totally Cool <span className="text-sky-600">Smoovy</span>
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            A refreshingly smooth brand bringing icy-cool vibes, frozen aesthetics, and ultra-smooth creativity to everything we do.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-2xl px-6">Get Started</Button>
            <Button variant="outline" className="rounded-2xl px-6">Contact Us</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <Card className="rounded-2xl shadow-xl bg-white/80 backdrop-blur">
            <CardContent className="p-10 text-center">
              <Snowflake className="mx-auto mb-4 h-12 w-12 text-sky-500" />
              <p className="text-xl font-semibold">Ice Cold. Ultra Smooth.</p>
              <p className="text-sm mt-2 text-slate-600">
                Totally Cool Smoovy LLC is built on originality, chill energy, and smooth execution.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Brand Development", "Creative Design", "Product Concepts"].map((service, i) => (
              <motion.div key={service} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="rounded-2xl shadow-md h-full">
                  <CardContent className="p-8">
                    <IceCream className="h-8 w-8 text-sky-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-sm text-slate-600">
                      Smooth ideas crafted with a cool aesthetic and strong identity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Totally Cool Smoovy LLC</h2>
          <p className="text-slate-700 leading-relaxed">
            Totally Cool Smoovy LLC is an independent creative company focused on building brands, ideas,
            and products that feel effortless, modern, and unmistakably cool.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-slate-600">Let’s build something smooth together.</p>
          <Button className="rounded-2xl px-8 flex items-center gap-2 mx-auto">
            <Mail className="h-4 w-4" /> Contact Totally Cool Smoovy
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-slate-500 space-y-2">
        <p>© {new Date().getFullYear()} Totally Cool Smoovy LLC. All rights reserved.</p>
        <p className="text-xs max-w-xl mx-auto">
          Totally Cool Smoovy LLC is a registered limited liability company. All content, branding,
          and intellectual property on this website are owned by Totally Cool Smoovy LLC unless otherwise stated.
        </p>
        <p className="text-xs">Terms of Service | Privacy Policy</p>
      </footer>
    </div>
  );
}
