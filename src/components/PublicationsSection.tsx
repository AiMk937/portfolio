// src/components/PublicationsSection.tsx
'use client'

import Link from 'next/link'
import { Publication } from '@/data/data'

export default function PublicationsSection({
  items,
}: {
  items: Publication[]
}) {
  return (
    <section id="publications" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Publications
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {items.map(pub => (
          <div
            key={pub.id}
            className="pub-card relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-l-2xl" />

            {/* Title */}
            <h3 className="ml-4 text-2xl font-semibold text-gray-900 mb-2">
              {pub.title}
            </h3>

            {/* Journal & Date */}
            <p className="ml-4 text-sm text-gray-600 mb-6">
              {pub.journal} ·{' '}
              {new Date(pub.date).toLocaleDateString(undefined, {
                month: 'short',
                year: 'numeric',
              })}
            </p>

            {/* Buttons */}
            <div className="ml-4 flex flex-wrap gap-4">
              <Link
                href={pub.link}
                target="_blank"
                className="px-5 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
              >
                View Paper
              </Link>
              <Link
                href={pub.certificatePdf}
                target="_blank"
                className="px-5 py-2 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
              >
                View Certificate
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}