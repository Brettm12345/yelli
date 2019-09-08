import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { PathnameProps, WithChildren } from 'src/types'

const duration = 0.2

export const scrollDuration = duration * 1000

const enter = {
  opacity: 1,
  transition: {
    delay: duration,
    duration,
    when: 'beforeChildren',
  },
  y: 0,
}

const exit = {
  opacity: 0,
  transition: {
    duration,
  },
}

const initial = {
  ...exit,
  y: 20,
}

const PageTransition: React.FC<
  WithChildren<PathnameProps>
> = ({ children, pathname }) => (
  <AnimatePresence>
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      key={pathname}
      variants={{ enter, exit, initial }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export default PageTransition