'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Azure Functions'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Azure Cosmos DB', 'Prisma ORM'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'AWS Amplify', 'Azure DevOps', 'CI/CD'],
    },
    {
      category: 'E-commerce',
      skills: ['Shopify', 'Shopify Liquid'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            A comprehensive toolkit built over 2+ years of full-stack development and technical leadership.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-primary/10 text-primary font-medium text-sm rounded-full hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
