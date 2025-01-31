'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function TransitionTemplate({ children }: { children: React.ReactNode }) {
  const key = usePathname()
  return (
    <motion.div
      key={key}
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
