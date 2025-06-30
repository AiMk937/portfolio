// src/components/BackgroundPulse.tsx
'use client'

import { animate } from '@motionone/dom'
import { useEffect, useRef } from 'react'

export default function BackgroundPulse() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      animate(
        ref.current,
        { scale: [1.2, 1] },
        { duration: 20, repeat: Infinity, easing: 'ease-in-out' }
      )
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-[url('/background-dots.svg')] opacity-10 will-change-transform"
      style={{ transform: 'scale(1.2)' }}
    />
  )
}