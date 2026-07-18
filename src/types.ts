import type { HTMLAttributes } from 'astro/types'

export interface LayoutProps extends HTMLAttributes<'div'> {
  title?: string
  description?: string
}

export interface CardProps extends HTMLAttributes<'div'> {
  title?: string
  eyebrow?: string
  as?: any
}

export interface ButtonProps extends HTMLAttributes<'a'> {
  variant?: 'primary' | 'ghost'
  as?: 'a' | 'button'
}

export interface Experiment {
  name: string
  description: string
  status: string
  href?: string | null
  repo?: string | null
}
