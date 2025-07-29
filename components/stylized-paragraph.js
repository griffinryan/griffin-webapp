import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const MotionText = motion(Text)

// Concert poster word emphasis patterns
const EMPHASIS_PATTERNS = [
  { pattern: /\b(music|sound|rhythm|beat|melody)\b/gi, style: 'accent' },
  { pattern: /\b(create|build|design|develop|make)\b/gi, style: 'bold' },
  { pattern: /\b(passion|love|dream|vision|inspire)\b/gi, style: 'artistic' },
  { pattern: /\b(and|the|with|for)\b/gi, style: 'small' }
]

const StylizedParagraph = ({ children, variant = 'dynamic', ...props }) => {
  const [processedContent, setProcessedContent] = useState(children)
  const textColor = useColorModeValue('gray.700', 'cream')
  const shadowColor = useColorModeValue(
    '0 0 10px rgba(186, 85, 211, 0.1)', 
    '0 0 15px rgba(254, 243, 199, 0.05)'
  )

  // Dynamic font selection based on paragraph length
  const getFontFamily = () => {
    if (typeof children === 'string') {
      const length = children.length
      if (length < 100) return "'Anton', sans-serif"
      if (length < 200) return "'Bebas Neue', sans-serif"
      return "'Space Grotesk', sans-serif"
    }
    return "'Space Grotesk', sans-serif"
  }

  // Process text for concert poster styling
  useEffect(() => {
    if (typeof children === 'string' && variant === 'dynamic') {
      let processedText = children
      const elements = []
      let lastIndex = 0

      // Find and style emphasis words
      EMPHASIS_PATTERNS.forEach(({ pattern, style }) => {
        const matches = [...children.matchAll(pattern)]
        matches.forEach(match => {
          const index = match.index
          if (index > lastIndex) {
            elements.push(children.substring(lastIndex, index))
          }
          
          const styledWord = (
            <Box
              as="span"
              key={`${style}-${index}`}
              sx={{
                display: 'inline-block',
                transform: style === 'artistic' ? 'rotate(-2deg)' : 
                          style === 'small' ? 'scale(0.8)' : 'none',
                fontFamily: style === 'accent' ? "'Bebas Neue', sans-serif" :
                           style === 'bold' ? "'Black Ops One', sans-serif" :
                           style === 'artistic' ? "'Permanent Marker', cursive" :
                           'inherit',
                color: style === 'accent' ? 'coral.400' :
                       style === 'bold' ? 'sunset.400' :
                       style === 'artistic' ? 'coral.300' : 'inherit',
                textShadow: style !== 'small' ? '0 0 20px rgba(255, 107, 107, 0.3)' : 'none',
                letterSpacing: style === 'bold' ? '-0.04em' : 'inherit',
                margin: '0 0.1em',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: style === 'artistic' ? 'rotate(-4deg) scale(1.1)' :
                            style !== 'small' ? 'scale(1.05)' : 'scale(0.9)',
                  filter: 'brightness(1.2)'
                }
              }}
            >
              {match[0]}
            </Box>
          )
          elements.push(styledWord)
          lastIndex = index + match[0].length
        })
      })

      if (lastIndex < children.length) {
        elements.push(children.substring(lastIndex))
      }

      setProcessedContent(elements.length > 0 ? elements : children)
    }
  }, [children, variant])

  const dynamicFontFamily = getFontFamily()
  const isShortText = typeof children === 'string' && children.length < 150

  return (
    <MotionText
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
        '&:hover': {
          letterSpacing: isShortText ? '-0.05em' : '-0.03em',
          transform: 'translateZ(0)'
        }
      }}
      {...props}
    >
      {variant === 'dynamic' ? processedContent : children}
    </MotionText>
  )
}

export default StylizedParagraph