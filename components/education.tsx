'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  const education = [
    {
      school: 'Kongu Engineering College',
      degree: 'Bachelor of Engineering',
      field: 'Electronics and Communication Engineering',
      duration: '2020 – 2024',
      location: 'Erode, Tamil Nadu, India',
      type: 'college',
      highlights: [
        'Comprehensive engineering curriculum',
        'Strong foundation in electronics and communications',
        'Industry-focused projects and internships',
      ],
    },
    {
      school: 'Navan Bharath National School',
      degree: 'AISSCE',
      field: 'Senior Secondary Education',
      duration: '2018 – 2020',
      location: 'Tamil Nadu, India',
      type: 'school',
      highlights: [
        'Rigorous academic curriculum',
        'Strong foundation in mathematics and science',
        'Competitive examination preparation',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Strong academic foundation from school through engineering, combined with practical software development experience.
          </motion.p>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl border transition-all duration-300 group ${
                  edu.type === 'college'
                    ? 'bg-card border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10'
                    : 'bg-card border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors duration-300 ${
                    edu.type === 'college' ? 'text-primary group-hover:text-primary' : 'text-accent group-hover:text-accent'
                  }`} />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                      edu.type === 'college' ? 'text-primary group-hover:text-primary' : 'text-accent group-hover:text-accent'
                    }`}>
                      {edu.school}
                    </p>
                    <p className="text-muted-foreground mb-2">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4 pl-10">
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 flex gap-2">
                          <span className={`font-bold transition-colors duration-300 ${
                            edu.type === 'college' ? 'text-primary' : 'text-accent'
                          }`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
