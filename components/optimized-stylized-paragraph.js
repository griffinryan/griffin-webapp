import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback, memo } from 'react'

const MotionText = motion(Text)

// Memoized word component for performance
const StyledWord = memo(({ word, style, index }) => (
  <Box
    as="span"
    key={`word-${index}`}
    sx={{
      display: 'inline-block',
      transform: style.transform,
      fontFamily: style.fontFamily,
      color: style.color,
      textShadow: style.textShadow,
      letterSpacing: style.letterSpacing,
      margin: style.margin,
      transition: 'all 0.3s ease',
      willChange: 'auto', // Only use will-change on hover
      '&:hover': {
        transform: style.hoverTransform,
        filter: 'brightness(1.2)',
        willChange: 'transform, filter'
      }
    }}
  >
    {word}
  </Box>
))

StyledWord.displayName = 'StyledWord'

// Simplified emphasis patterns for better performance
const EMPHASIS_PATTERNS = [
  { pattern: /\b(music|sound|rhythm|beat|melody)\b/gi, style: 'accent' },
  { pattern: /\b(create|build|design|develop|make)\b/gi, style: 'bold' },
  { pattern: /\b(passion|love|dream|vision|inspire)\b/gi, style: 'artistic' }
]

const OptimizedStylizedParagraph = ({ children, variant = 'dynamic', enableEffects = true, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const textColor = useColorModeValue('gray.700', 'cream')
  const shadowColor = useColorModeValue(
    '0 0 10px rgba(186, 85, 211, 0.1)', 
    '0 0 15px rgba(254, 243, 199, 0.05)'
  )

  // Use IntersectionObserver for lazy loading effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`paragraph-${props.id || 'default'}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [props.id])

  // Memoize font selection
  const dynamicFontFamily = useMemo(() => {
    if (typeof children === 'string') {
      const length = children.length
      if (length < 100) return "'Anton', sans-serif"
      if (length < 200) return "'Bebas Neue', sans-serif"
      return "'Space Grotesk', sans-serif"
    }
    return "'Space Grotesk', sans-serif"
  }, [children])

  // Memoize processed content
  const processedContent = useMemo(() => {
    if (!enableEffects || !isVisible || typeof children !== 'string' || variant !== 'dynamic') {
      return children
    }

    const words = children.split(/\s+/)
    return words.map((word, index) => {
      // Simple style determination without regex for most words
      let style = 'normal'
      const lowerWord = word.toLowerCase()
      
      // Quick checks for common emphasis words
      if (['music', 'sound', 'rhythm', 'beat', 'melody'].includes(lowerWord)) {
        style = 'accent'
      } else if (['create', 'build', 'design', 'develop', 'make'].includes(lowerWord)) {
        style = 'bold'
      } else if (['passion', 'love', 'dream', 'vision', 'inspire'].includes(lowerWord)) {
        style = 'artistic'
      }

      if (style === 'normal') {
        return word + ' '
      }

      const styleConfig = {
        transform: style === 'artistic' ? 'rotate(-2deg)' : 'none',
        fontFamily: style === 'accent' ? "'Bebas Neue', sans-serif" :
                   style === 'bold' ? "'Black Ops One', sans-serif" :
                   style === 'artistic' ? "'Permanent Marker', cursive" :
                   'inherit',
        color: style === 'accent' ? 'coral.400' :
               style === 'bold' ? 'sunset.400' :
               style === 'artistic' ? 'coral.300' : 'inherit',
        textShadow: '0 0 20px rgba(255, 107, 107, 0.3)',
        letterSpacing: style === 'bold' ? '-0.04em' : 'inherit',
        margin: '0 0.1em',
        hoverTransform: style === 'artistic' ? 'rotate(-4deg) scale(1.1)' : 'scale(1.05)'
      }

      return <StyledWord key={index} word={word} style={styleConfig} index={index} />
    })
  }, [children, variant, isVisible, enableEffects])

  const isShortText = typeof children === 'string' && children.length < 150

  return (
    <MotionText
      id={`paragraph-${props.id || 'default'}`}
      fontSize={{ base: 'md', md: isShortText ? 'xl' : 'lg' }}
      lineHeight={isShortText ? '1.3' : '1.5'}
      fontFamily={dynamicFontFamily}
      fontWeight={isShortText ? '600' : '500'}
      letterSpacing={isShortText ? '-0.04em' : '-0.02em'}
      color={textColor}
      textShadow={shadowColor}
      mb={4}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      textTransform={isShortText ? 'uppercase' : 'none'}
      sx={{
        textIndent: isShortText ? '0' : '1.5em',
        wordSpacing: isShortText ? '0.1em' : 'normal',
        transform: 'translateZ(0)', // GPU acceleration
        '&:hover': {
          letterSpacing: isShortText ? '-0.05em' : '-0.03em'
        }
      }}
      {...props}
    >
      {processedContent}
    </MotionText>
  )
}

export default memo(OptimizedStylizedParagraph)