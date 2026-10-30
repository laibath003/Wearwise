
import {
  Sparkles,
  Shirt,
  Search,
  Layers,
  CalendarDays,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { StyleAdvisorRequest } from '../../api/styleAdvisor'

export type Mode = StyleAdvisorRequest['mode']

export type ProductCategory = Extract<
  StyleAdvisorRequest,
  { mode: 'find-product' }
>['category']

export type ModeOption = {
  id: Mode
  title: string
  description: string
  icon: LucideIcon
}

export const modes: ModeOption[] = [
  {
    id: 'outfit',
    title: 'Create an Outfit',
    description: 'Describe a look you have in mind.',
    icon: Sparkles,
  },
  {
    id: 'owned-item',
    title: 'Style My Item',
    description: 'Style something already in your wardrobe.',
    icon: Shirt,
  },
  {
    id: 'find-product',
    title: 'Find a Product',
    description: 'Search by color, category, and budget.',
    icon: Search,
  },
  {
    id: 'pair-product',
    title: 'Pair a Store Item',
    description: 'Find pieces that complement a product.',
    icon: Layers,
  },
  {
    id: 'three-outfits',
    title: 'Three Outfit Ideas',
    description: 'Explore different looks for different occasions.',
    icon: CalendarDays,
  },
]
