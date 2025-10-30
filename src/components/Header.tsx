
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
      <header className="p-4 flex items-center  shadow-lg">
        Utils
      </header>

   
    </>
  )
}
