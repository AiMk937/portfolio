// src/components/Section.tsx
import React, { ReactNode } from 'react'

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      {children}
    </section>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-4xl font-bold text-center mb-8">{children}</h2>
}