import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Dynamic color variants for portfolio items
const getColorVariants = (colorMode) => ({
  firefly: {
    bg: colorMode === 'light' ? 'rgba(255, 183, 77, 0.08)' : 'rgba(255, 183, 77, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(255, 183, 77, 0.3)' : 'rgba(255, 183, 77, 0.4)',
    shadow: '0 8px 32px 0 rgba(255, 183, 77, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(255, 183, 77, 0.5)' : 'rgba(255, 183, 77, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(255, 183, 77, 0.35)'
  },
  ocean: {
    bg: colorMode === 'light' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)',
    shadow: '0 8px 32px 0 rgba(59, 130, 246, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(59, 130, 246, 0.35)'
  },
  emerald: {
    bg: colorMode === 'light' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.4)',
    shadow: '0 8px 32px 0 rgba(16, 185, 129, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.35)'
  },
  violet: {
    bg: colorMode === 'light' ? 'rgba(139, 92, 246, 0.08)' : 'rgba(139, 92, 246, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
    shadow: '0 8px 32px 0 rgba(139, 92, 246, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(139, 92, 246, 0.35)'
  },
  rose: {
    bg: colorMode === 'light' ? 'rgba(244, 63, 94, 0.08)' : 'rgba(244, 63, 94, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.4)',
    shadow: '0 8px 32px 0 rgba(244, 63, 94, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(244, 63, 94, 0.5)' : 'rgba(244, 63, 94, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(244, 63, 94, 0.35)'
  },
  coral: {
    bg: colorMode === 'light' ? 'rgba(255, 107, 107, 0.08)' : 'rgba(255, 107, 107, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.4)',
    shadow: '0 8px 32px 0 rgba(255, 107, 107, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(255, 107, 107, 0.5)' : 'rgba(255, 107, 107, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(255, 107, 107, 0.35)'
  },
  sunset: {
    bg: colorMode === 'light' ? 'rgba(251, 191, 36, 0.08)' : 'rgba(251, 191, 36, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.4)',
    shadow: '0 8px 32px 0 rgba(251, 191, 36, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(251, 191, 36, 0.5)' : 'rgba(251, 191, 36, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(251, 191, 36, 0.35)'
  },
  teal: {
    bg: colorMode === 'light' ? 'rgba(20, 184, 166, 0.08)' : 'rgba(20, 184, 166, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(20, 184, 166, 0.4)',
    shadow: '0 8px 32px 0 rgba(20, 184, 166, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(20, 184, 166, 0.35)'
  },
  indigo: {
    bg: colorMode === 'light' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.4)',
    shadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(99, 102, 241, 0.35)'
  },
  amber: {
    bg: colorMode === 'light' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(245, 158, 11, 0.15)',
    borderColor: colorMode === 'light' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.4)',
    shadow: '0 8px 32px 0 rgba(245, 158, 11, 0.25)',
    hoverBorder: colorMode === 'light' ? 'rgba(245, 158, 11, 0.5)' : 'rgba(245, 158, 11, 0.6)',
    hoverShadow: '0 12px 40px 0 rgba(245, 158, 11, 0.35)'
  }
})

export const DynamicGlassContainer = ({ 
  children, 
  delay = 0, 
  colorVariant = 'coral',
  ...props 
}) => {
  // Get color mode inside component
  const colorMode = useColorModeValue('light', 'dark')
  
  // Get the color variants based on current color mode
  const colorVariants = getColorVariants(colorMode)
  
  // Get the color variant or fallback to coral
  const variant = colorVariants[colorVariant] || colorVariants.coral
  
  // Base glass styles
  const baseGradient = useColorModeValue(
    'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
    'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)'
  )
  
  return (
    <MotionBox
      p={6}
      borderRadius="lg"
      bg={variant.bg}
      borderWidth="1px"
      borderColor={variant.borderColor}
      boxShadow={variant.shadow}
      css={{ 
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: baseGradient,
        pointerEvents: 'none'
      }}
      _hover={{
        borderColor: variant.hoverBorder,
        transform: 'translateY(-4px)',
        boxShadow: variant.hoverShadow
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Keep the animated section wrapper
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