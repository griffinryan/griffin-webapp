// Concert poster text utilities for dynamic styling

// Get a random poster font based on context
export const getRandomPosterFont = (context = 'body') => {
  const fonts = {
    body: ["'Anton', sans-serif", "'Bebas Neue', sans-serif", "'Space Grotesk', sans-serif"],
    accent: ["'Black Ops One', sans-serif", "'Permanent Marker', cursive"],
    display: ["'Anton', sans-serif", "'Bebas Neue', sans-serif", "'Black Ops One', sans-serif"]
  }
  
  const fontArray = fonts[context] || fonts.body
  return fontArray[Math.floor(Math.random() * fontArray.length)]
}

// Calculate dynamic letter spacing based on text length
export const getDynamicLetterSpacing = (text) => {
  if (!text) return '-0.02em'
  
  const length = text.length
  if (length < 20) return '-0.05em'  // Very tight for short text
  if (length < 50) return '-0.04em'  // Tight
  if (length < 100) return '-0.03em' // Medium
  if (length < 200) return '-0.02em' // Normal
  return '-0.01em' // Loose for long text
}

// Get rotation value for artistic effect
export const getArtisticRotation = (index, maxRotation = 5) => {
  const rotations = [-maxRotation, -maxRotation/2, 0, maxRotation/2, maxRotation]
  return rotations[index % rotations.length]
}

// Split text into words with styling metadata
export const splitTextForPosterStyling = (text) => {
  const words = text.split(' ')
  return words.map((word, index) => {
    const isLong = word.length > 7
    const isShort = word.length <= 3
    const isEmphasis = /[!?]/.test(word)
    
    return {
      text: word,
      style: {
        font: isLong ? "'Anton', sans-serif" : 
              isShort ? "'Space Grotesk', sans-serif" : 
              "'Bebas Neue', sans-serif",
        scale: isEmphasis ? 1.2 : isShort ? 0.9 : 1,
        rotation: isEmphasis ? getArtisticRotation(index, 8) : 0,
        color: isEmphasis ? 'coral.400' : 'inherit',
        letterSpacing: getDynamicLetterSpacing(word)
      }
    }
  })
}

// Apply concert poster compression to lines
export const compressLineForPoster = (text, maxWidth = 80) => {
  const charCount = text.length
  if (charCount <= maxWidth) return 1
  
  // Calculate compression factor
  const compressionFactor = maxWidth / charCount
  return Math.max(0.7, Math.min(1, compressionFactor)) // Clamp between 0.7 and 1
}

// Get style variations for different text types
export const getPosterTextVariant = (type = 'body') => {
  const variants = {
    body: {
      fontFamily: "'Anton', 'Space Grotesk', sans-serif",
      letterSpacing: '-0.02em',
      fontWeight: '500',
      textTransform: 'none'
    },
    quote: {
      fontFamily: "'Permanent Marker', cursive",
      letterSpacing: '0.01em',
      fontWeight: '400',
      textTransform: 'none',
      fontStyle: 'italic',
      transform: 'rotate(-2deg)'
    },
    emphasis: {
      fontFamily: "'Black Ops One', sans-serif",
      letterSpacing: '-0.04em',
      fontWeight: '700',
      textTransform: 'uppercase'
    },
    callout: {
      fontFamily: "'Bebas Neue', sans-serif",
      letterSpacing: '-0.03em',
      fontWeight: '600',
      textTransform: 'uppercase',
      fontSize: '1.2em'
    }
  }
  
  return variants[type] || variants.body
}

// Create animated text spans for individual letter effects
export const createLetterSpans = (text, options = {}) => {
  const {
    baseDelay = 0,
    delayIncrement = 0.05,
    animationType = 'wiggle'
  } = options
  
  return text.split('').map((letter, index) => ({
    letter,
    style: {
      display: 'inline-block',
      animationDelay: `${baseDelay + (index * delayIncrement)}s`,
      '--rotation': `${getArtisticRotation(index)}deg`,
      '--index': index
    }
  }))
}

// Apply responsive scaling based on viewport
export const getResponsivePosterScale = (baseSize = 16) => {
  return {
    base: `${baseSize * 0.9}px`,
    sm: `${baseSize}px`,
    md: `${baseSize * 1.1}px`,
    lg: `${baseSize * 1.2}px`,
    xl: `${baseSize * 1.3}px`
  }
}

// Mix fonts within a single paragraph for concert poster effect
export const mixFontsInParagraph = (text) => {
  const sentences = text.split(/([.!?]+)/)
  return sentences.map((sentence, index) => {
    if (sentence.match(/[.!?]+/)) return sentence // Keep punctuation as is
    
    const fontIndex = index % 3
    const fonts = [
      "'Anton', sans-serif",
      "'Bebas Neue', sans-serif",
      "'Space Grotesk', sans-serif"
    ]
    
    return {
      text: sentence,
      font: fonts[fontIndex],
      transform: fontIndex === 2 ? 'none' : `rotate(${fontIndex === 0 ? -1 : 1}deg)`
    }
  })
}

export default {
  getRandomPosterFont,
  getDynamicLetterSpacing,
  getArtisticRotation,
  splitTextForPosterStyling,
  compressLineForPoster,
  getPosterTextVariant,
  createLetterSpans,
  getResponsivePosterScale,
  mixFontsInParagraph
}