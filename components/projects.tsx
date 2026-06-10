'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: 'Software Marketplace',
      description:
        'Application marketplace platform with version management, user reviews, and serverless backend architecture. Enables developers to discover, evaluate, and deploy software solutions.',
      tech: ['Node.js', 'Azure Functions', 'Cosmos DB', 'TypeScript', 'React'],
      highlights: [
        'Serverless backend with auto-scaling',
        'Version management system',
        'User review and rating system',
        'Cloud-native architecture',
      ],
    },
    {
      name: 'Truck Fleet Management System',
      description:
        'Fleet management platform featuring driver management, task tracking, and secure authentication. Helps organizations efficiently manage their transportation operations.',
      tech: ['Next.js', 'Node.js', 'AWS Amplify', 'AWS Cognito', 'DynamoDB'],
      highlights: [
        'Real-time driver tracking',
        'Task assignment and management',
        'Secure authentication with AWS Cognito',
        'Scalable infrastructure on AWS',
      ],
    },
    {
      name: 'Doctor Vanilla E-commerce',
      description:
        'Custom Shopify e-commerce storefront for organic vanilla extract brand. Features responsive design, product customization, and business-specific functionality.',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'HTML'],
      highlights: [
        'Custom Shopify Liquid templates',
        'Responsive design',
        'Product variant management',
        'Optimized checkout flow',
      ],
    },
    {
      name: 'Brick & Mortar',
      description:
        'Construction management platform focused on project coordination, workflow management, and operational efficiency. Helps construction teams streamline operations and improve project visibility.',
      tech: ['Next.js', 'Node.js', 'Cloud Services', 'PostgreSQL'],
      highlights: [
        'Project management dashboard',
        'Team collaboration tools',
        'Real-time updates',
        'Comprehensive reporting',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            A selection of production applications I&apos;ve architected and delivered, spanning e-commerce, SaaS, and
            enterprise platforms.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Project Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
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
