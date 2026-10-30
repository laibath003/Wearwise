
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = '',
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const animationStyle: CSSProperties = {
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={elementRef}
      style={animationStyle}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
