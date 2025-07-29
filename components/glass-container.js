import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const GlassContainer = ({ children, delay = 0, ...props }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  const hoverBgColor = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.2)')
  
  return (
    <MotionBox
      p={6}
      borderRadius="lg"
      bg={bgColor}
      css={{ backdropFilter: 'blur(10px)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        backgroundColor: hoverBgColor,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

export const AnimatedSection = ({ children, delay = 0 }) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </MotionBox>
)