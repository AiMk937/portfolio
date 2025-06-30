// src/components/ExperienceSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '@/data/data'

export interface ExperienceSectionProps {
  items: Experience[]
}

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="bg-white text-black py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      {/* Grid container: 1 col on mobile, 2 cols on md+ */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {items.map((exp, idx) => (
          <motion.div
            key={exp.id}
            className="bg-gray-100 rounded-2xl p-8 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Logo + role/company */}
            <div className="flex items-center space-x-6 mb-6">
              {exp.companyLogo && (
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={exp.companyLogo}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-semibold">
                  {exp.role}
                </h3>
                <p className="text-gray-600">
                  {exp.company}
                  {exp.startDate && (
                    <> • {new Date(exp.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })}</>
                  )}
                  {exp.endDate && (
                    <> – {new Date(exp.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })}</>
                  )}
                </p>
              </div>
            </div>

            {/* Projects Worked On */}
            {exp.projectsWorkedOn?.length > 0 && (
              <div className="mb-4">
                <p className="font-medium">Projects worked on:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {exp.projectsWorkedOn.map(p => (
                    <li key={p} className="text-gray-700">{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* External / Other Work */}
            {exp.externalProjects?.length > 0 && (
              <div className="mb-4">
                <p className="font-medium">Other work:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {exp.externalProjects.map(p => (
                    <li key={p} className="text-gray-700">{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack pills */}
            {exp.techStack?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.techStack.map(tag => (
                  <span
                    key={tag}
                    className="inline-block bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}