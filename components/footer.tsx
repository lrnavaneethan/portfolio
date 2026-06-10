'use client'

import { motion } from 'framer-motion'
import { Code2, Link as LinkIcon, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Code2,
      href: 'https://github.com/navaneethanlr',
      label: 'GitHub',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      icon: LinkIcon,
      href: 'https://linkedin.com/in/navaneethanlr',
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      icon: Mail,
      href: 'mailto:navaneethanlr@example.com',
      label: 'Email',
      ariaLabel: 'Send email',
    },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Navaneethan L R</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer & Technical Lead</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Navaneethan L R. All rights reserved.</p>
          <p>Crafted with attention to detail using Next.js, React, and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  )
}
