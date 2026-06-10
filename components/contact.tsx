'use client'

import { motion } from 'framer-motion'
import { Mail, Link as LinkIcon, Code2, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'navaneethanlr@gmail.com',
      href: 'mailto:navaneethanlr@gmail.com',
      color: 'text-primary',
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: '@navaneethanlr',
      href: 'https://linkedin.com/in/navaneethanlr',
      color: 'text-primary',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: '@navaneethanlr',
      href: 'https://github.com/navaneethanlr',
      color: 'text-primary',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">Let&apos;s Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for a Full Stack Developer, Technical Lead, or just want to discuss tech
              and ideas, I&apos;m always open to conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <Icon className={`w-8 h-8 ${method.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{method.label}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {method.value}
                  </p>
                </motion.a>
              )
            })}
          </div>

          {/* CTA Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-card rounded-xl border border-border/50 text-center"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-foreground font-semibold mb-2">
              Have a project in mind? Let&apos;s talk about building something amazing together.
            </p>
            <p className="text-muted-foreground">
              I respond to all inquiries and would love to hear about your ideas, challenges, or opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
