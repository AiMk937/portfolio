// src/components/TechStackSection.tsx
'use client'

import { useState, useMemo } from 'react'
import { Section, SectionTitle } from './Section'
import { Tech } from '@/data/data'

export default function TechStackSection({ items }: { items: Tech[] }) {
  const CATEGORY_ORDER = [
    'language',
    'framework',
    'tool',
    'database',
    'soft-skill',
    'other',
  ] as const

  const COLOR_MAP: Record<typeof CATEGORY_ORDER[number], string> = {
    language:    '#0070C9',
    framework:   '#735BF2',
    tool:        '#28A48B',
    database:    '#FAAD14',
    'soft-skill':'#FF375F',
    other:       '#6B7280',
  }

  const [filter, setFilter] = useState<'all' | string>('all')

  const tabs = useMemo(() => {
    const have = new Set(items.map(i => i.category))
    return ['all', ...CATEGORY_ORDER.filter(c => have.has(c))]
  }, [items])

  const groups = useMemo(() => {
    const cats =
      filter === 'all'
        ? CATEGORY_ORDER
        : ([filter] as typeof CATEGORY_ORDER)
    return cats.map(cat => ({
      category: cat,
      list: items
        .filter(i => filter === 'all' ? i.category === cat : i.category === filter)
        .sort((a, b) => a.name.localeCompare(b.name)),
    })).filter(g => g.list.length > 0)
  }, [items, filter])

  const pretty = (s: string) =>
    s === 'all'
      ? 'All'
      : s.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <Section id="skills" className="bg-gray-50 text-black">
      <SectionTitle>Tech Stack</SectionTitle>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map(tab => {
          const active = tab === filter
          return (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={[
                'px-4 py-2 rounded-full border transition-colors',
                active
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
              ].join(' ')}
            >
              {pretty(tab)}
            </button>
          )
        })}
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {groups.map(({ category, list }) => (
          <div key={category} className="flex flex-wrap gap-2">
            {list.map(tech => {
              const color = COLOR_MAP[category] || COLOR_MAP.other
              return (
                <span
                  key={tech.id}
                  className="inline-block border px-3 py-1 rounded-full text-sm font-medium transition"
                  style={{
                    borderColor: color,
                    color,
                  }}
                >
                  {tech.name}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </Section>
  )
}