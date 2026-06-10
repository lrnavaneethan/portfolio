'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Yectra Technologies',
      role: 'Full Stack Developer & Technical Lead',
      duration: 'Apr 2024 – Present',
      location: 'Coimbatore',
      achievements: [
        'Delivered multiple production-grade web applications using Next.js, Node.js, and MongoDB',
        'Led development teams and assigned tasks across 4 major projects',
        'Built scalable APIs and cloud solutions on AWS and Azure',
        'Worked directly with clients ensuring clean handoffs and zero surprise escalations',
        'Managed full project lifecycles from architecture to deployment and post-launch support',
        'Integrated Shopify platforms into client-facing applications',
      ],
      skills: [
        'Next.js',
        'Node.js',
        'React.js',
        'TypeScript',
        'AWS',
        'Azure',
        'MongoDB',
        'PostgreSQL',
        'Shopify',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">Experience</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Building and shipping production-grade applications with a focus on system design and team leadership.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    </div>
                    <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground flex gap-3"
                      >
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-sm font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
