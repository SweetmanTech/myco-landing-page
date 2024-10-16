'use client'

import * as React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

export function ThemeSwitcher() {
  const segment = useSelectedLayoutSegment()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = null
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment])

  return null
}
