// src/components/EducationSection.tsx
'use client'

import { Section, SectionTitle } from './Section'
import { Education } from '@/data/data'

export default function EducationSection({ items }: { items: Education[] }) {
  return (
    <Section id="education" className="bg-gray-50 text-black">
      <SectionTitle>Qualifications</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-6">
        {items.map((edu) => (
          <div
            key={edu.id}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="mt-1 text-gray-700">
              {edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}
            </p>
            <p className="mt-2 text-gray-500">
              {edu.startDate && new Date(edu.startDate).getFullYear()}
              {edu.endDate ? ` – ${new Date(edu.endDate).getFullYear()}` : ''}
              {edu.score ? ` • ${edu.score}` : ''}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}