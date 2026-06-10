import type { Experiment } from './types'

export const SITE_TITLE = 'Nanoo | Lab'
export const SITE_DESCRIPTION =
  'Experimental engineering lab for the edge ecosystem. Built fast, simple, and scalable.'
export const BRAND_TAGLINE = 'Built to be fast, simple, and scalable'
export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Nanoo Lab // Performance First`

export const EXPERIMENTS: Experiment[] = [
  {
    name: 'Nanoo Stack',
    description:
      'High-performance engineering starter kit for edge-native applications.',
    status: 'Development',
    href: 'https://stack.nanoolabs.dev',
    repo: 'https://github.com/nanoolabs',
  },
  {
    name: 'Nanoo CDN',
    description:
      'Custom edge proxy optimization for content delivery within the ecosystem.',
    status: 'Active',
    href: null,
    repo: 'https://github.com/nanoolabs/cdn',
  },
  {
    name: 'Nanoo Webrings',
    description:
      'Sovereign engineering for decentralized node discovery and federation.',
    status: 'Experimental',
    href: null,
    repo: 'https://github.com/nanoolabs/webrings',
  },
  {
    name: 'Nanoo Status',
    description:
      'Real-time system health, uptime monitoring, and incident history.',
    status: 'Live',
    href: 'https://status.nanoolabs.dev',
    repo: 'https://github.com/nanoolabs/status',
  },
  {
    name: 'Nanoo Docs',
    description:
      'Central technical documentation and engineering guides for the ecosystem.',
    status: 'Ongoing',
    href: 'https://docs.nanoolabs.dev',
    repo: 'https://github.com/nanoolabs/docs',
  },
]
