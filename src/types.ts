import type { HTMLAttributes } from 'astro/types'

export interface BaseProps extends HTMLAttributes<'div'> {}

export interface LayoutProps extends HTMLAttributes<'div'> {
  title?: string
  description?: string
}

export interface CardProps extends BaseProps {
  title?: string
  eyebrow?: string
  as?: any
}

export interface ButtonProps extends HTMLAttributes<'a'> {
  variant?: 'primary' | 'ghost'
  as?: 'a' | 'button'
}

export interface LinkProps extends HTMLAttributes<'a'> {
  href: string
  underline?: boolean
}

export interface FooterProps extends HTMLAttributes<'footer'> {}

export interface Experiment {
  name: string
  description: string
  status: string
  href?: string | null
  repo?: string | null
}
