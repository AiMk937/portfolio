// src/components/CertificatesSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import type { Certificate } from '@/data/data'

export default function CertificatesSection({ items }: { items: Certificate[] }) {
  return (
    <Section id="certificates" className="bg-white text-black py-20 px-6">
      <SectionTitle>Certificates</SectionTitle>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition flex flex-col"
          >
            {cert.filePath && (
              <Link
                href={cert.filePath}
                target="_blank"
                className="block mb-4 overflow-hidden rounded-lg h-48"
              >
                <Image
                  src={cert.filePath}
                  alt={cert.title}
                  width={400}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </Link>
            )}

            <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
            <p className="text-gray-600">{cert.organization}</p>
            <p className="text-gray-500 mb-4">
              {new Date(cert.issueDate).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: cert.issueDate.length > 7 ? 'numeric' : undefined,
              })}
            </p>

            {cert.filePath && (
              <Link
                href={cert.filePath}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition mt-auto"
              >
                <FileText className="w-5 h-5" />
                View Certificate
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}