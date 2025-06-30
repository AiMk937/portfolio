// src/components/ProjectsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/data'

export interface ProjectsSectionProps {
  items: Project[]
}

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-white text-black py-20 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      {/* Responsive Grid: 1 col (mobile), 2 col (sm+), 3 col (lg+) */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((proj, idx) => (
          <motion.div
            key={proj.id}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>

            {/* Problem Statement */}
            <p className="text-gray-700 mb-4">{proj.problemStatement}</p>

            {/* Solution */}
            <p className="font-medium">Solution:</p>
            <p className="text-gray-700 mb-4">{proj.solution}</p>

            {/* Optional Features */}
            {proj.features?.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {proj.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}

            {/* Tech Stack Tags */}
            {proj.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map(t => (
                  <span
                    key={t}
                    className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Live
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-blue-600 font-medium hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}