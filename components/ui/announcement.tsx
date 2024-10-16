import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Blocks } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Announcement() {
  return (
    <Link
      href="https://www.newcult.co/templates"
      className="group inline-flex items-center rounded-lg border border-black/10 bg-transparent px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm"
      target="_blank"
      rel="noreferrer"
    >
      <Blocks className="h-4 w-4 group-hover:rotate-6 group-hover:fill-cyan-300" />{' '}
      <Separator className="mx-2 h-4 bg-neutral-900" orientation="vertical" />{' '}
      <span>New! Cult Directory Template</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
