"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

const mockupImages = [
  { src: "/mockup1.png", title: "Auxamate", description: "AI-powered automation agents for seamless business workflows", link: "https://auxamate.vercel.app/" },
  { src: "/mockup2.png", title: "The Muneeb Edits", description: "Professional video editing portfolio showcasing cinematic excellence", link: "https://themuneebedits.netlify.app/" },
  { src: "/mockup3.png", title: "Treat & Gather", description: "Mobile app connecting families for memorable gatherings and events" },
  { src: "/mockup4.png", title: "RYDO", description: "Smart carpool platform helping students share rides and save costs" },
  { src: "/1.jpeg", title: "BMBL Token", description: "Blockchain meme coin built for the next generation of crypto enthusiasts", link: "https://bmblance.vercel.app/" },
  { src: "/2.jpeg", title: "AI Ledger", description: "Decentralized crowdfunding platform powered by blockchain technology", link: "https://ailedger.netlify.app/" },
  { src: "/3.jpeg", title: "RemitGo", description: "Fast and secure international money transfer mobile application" },
  { src: "/4.jpeg", title: "Labwards", description: "Next-gen gaming and casino platform with immersive experiences", link: "https://earnlabfrontend.vercel.app/" },
  { src: "/6.jpeg", title: "Helvita", description: "Systematic money transfer solution for seamless global transactions", link: "https://helvitafrontend.vercel.app/" },
];

export function PortfolioSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%)",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/60 border border-zinc-700/50 rounded-full mb-6"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm font-medium">Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold mb-4"
          >
            <span className="text-gradient">Our </span>
            <span className="text-gradient-accent">Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our collection of cutting-edge solutions designed to transform businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockupImages.map((item, index) => {
            const CardWrapper = item.link ? 'a' : 'div';
            const cardProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 cursor-pointer"
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <CardWrapper {...cardProps} className="block">
                  <div className="relative" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </CardWrapper>
                <motion.div
                  className="absolute inset-0 border border-zinc-700/0 rounded-2xl z-30 pointer-events-none group-hover:border-zinc-700/50 transition-colors duration-300"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
