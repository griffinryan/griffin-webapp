import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const GlassPanel = ({ children, delay = 0, variant = 'default', ...props }) => {
  // Different glass styles for variety
  const variants = {
    default: {
      bg: useColorModeValue('rgba(255, 255, 255, 0.15)', 'rgba(10, 25, 47, 0.35)'),
      borderColor: useColorModeValue('rgba(255, 255, 255, 0.3)', 'rgba(255, 107, 107, 0.2)'),
      shadow: useColorModeValue(
        '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        '0 8px 32px 0 rgba(255, 107, 107, 0.1)'
      )
    },
    coral: {
      bg: useColorModeValue('rgba(255, 107, 107, 0.08)', 'rgba(255, 107, 107, 0.12)'),
      borderColor: useColorModeValue('rgba(255, 107, 107, 0.3)', 'rgba(255, 107, 107, 0.4)'),
      shadow: '0 8px 32px 0 rgba(255, 107, 107, 0.2)'
    },
    sunset: {
      bg: useColorModeValue('rgba(251, 191, 36, 0.08)', 'rgba(251, 191, 36, 0.12)'),
      borderColor: useColorModeValue('rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 0.4)'),
      shadow: '0 8px 32px 0 rgba(251, 191, 36, 0.2)'
    }
  }

  const currentVariant = variants[variant] || variants.default
  
  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      mb={6}
      borderRadius="lg"
      bg={currentVariant.bg}
      borderWidth="1px"
      borderColor={currentVariant.borderColor}
      boxShadow={currentVariant.shadow}
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
        background: useColorModeValue(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
          'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)'
        ),
        pointerEvents: 'none'
      }}
      _hover={{
        borderColor: useColorModeValue(
          variant === 'coral' ? 'rgba(255, 107, 107, 0.5)' :
          variant === 'sunset' ? 'rgba(251, 191, 36, 0.5)' :
          'rgba(255, 255, 255, 0.5)',
          variant === 'coral' ? 'rgba(255, 107, 107, 0.6)' :
          variant === 'sunset' ? 'rgba(251, 191, 36, 0.6)' :
          'rgba(255, 107, 107, 0.3)'
        ),
        transform: 'translateY(-2px)',
        boxShadow: useColorModeValue(
          '0 12px 40px 0 rgba(31, 38, 135, 0.2)',
          '0 12px 40px 0 rgba(255, 107, 107, 0.15)'
        )
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Simpler glass panel for inline text sections
export const GlassTextPanel = ({ children, ...props }) => {
  const bg = useColorModeValue('rgba(255, 255, 255, 0.08)', 'rgba(10, 25, 47, 0.25)')
  
  return (
    <Box
      display="inline-block"
      px={3}
      py={1}
      borderRadius="md"
      bg={bg}
      css={{ 
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      {...props}
    >
      {children}
    </Box>
  )
}