'use client'

import { motion } from 'framer-motion'

export default function About() {
  const features = [
    { title: 'Full Stack Development', desc: 'End-to-end web applications from database to UI' },
    { title: 'Cloud Technologies', desc: 'AWS, Azure, and serverless architecture expertise' },
    { title: 'Technical Leadership', desc: 'Team management and architectural decision-making' },
    { title: 'System Architecture', desc: 'Scalable and maintainable system design' },
    { title: 'Client Communication', desc: 'Direct engagement from requirements to delivery' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Most developers build features. I build systems that teams can ship from - and businesses can grow on. Over
            the past 2+ years as a Full Stack Developer and Technical Lead, I&apos;ve taken 4 products from
            architecture decisions to live AWS deployments. I write the code, design the infrastructure, and make sure
            the team has what they need to move fast without breaking things.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I work best when the problem is hard, the team is sharp, and there&apos;s something real to ship. If
            you&apos;re looking for someone who can architect systems, write clean code, and lead teams to deliver
            ambitious products, let&apos;s connect.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
