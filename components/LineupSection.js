import { Box, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const MotionBox = motion(Box)

const LineupRow = styled(MotionBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const BandName = styled(MotionBox)`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: baseline;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 900;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: translateZ(0); /* GPU acceleration */
  will-change: transform;
  
  &:hover {
    transform: scale(1.05);
    z-index: 10;
    animation: cosineWiggle 1.5s ease-in-out infinite;
    
    .band-word {
      color: #ff4757;
      text-shadow: 0 0 40px rgba(255, 71, 87, 0.9),
                   0 0 60px rgba(255, 71, 87, 0.6);
      filter: brightness(1.3);
    }
    
    .highlight {
      color: #fef3c7 !important;
      text-shadow: 0 0 40px rgba(254, 243, 199, 0.8),
                   0 0 60px rgba(254, 243, 199, 0.5);
      filter: brightness(1.4);
    }
  }
  
  @keyframes cosineWiggle {
    0% { 
      transform: translateY(0) translateX(0) rotate(0deg) scale(1.05);
    }
    25% { 
      transform: translateY(-12px) translateX(8px) rotate(2deg) scale(1.08);
    }
    50% { 
      transform: translateY(0) translateX(0) rotate(0deg) scale(1.05);
    }
    75% { 
      transform: translateY(12px) translateX(-8px) rotate(-2deg) scale(1.08);
    }
    100% { 
      transform: translateY(0) translateX(0) rotate(0deg) scale(1.05);
    }
  }
`

const BandWord = styled.span`
  display: inline-block;
  font-family: ${props => props.fontFamily || "'Bebas Neue', sans-serif"};
  letter-spacing: -0.02em;
  margin: 0 0.15em;
  transition: all 0.3s ease;
  
  &.small-word {
    font-size: 0.6em;
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.05em;
    opacity: 0.9;
  }
  
  &.highlight {
    color: #ff6b6b;
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  }
`

const LineupSection = ({ items, rowSizes = ['5rem', '4rem', '3.5rem'] }) => {
  // Group items into rows based on their index
  const rows = []
  let currentIndex = 0
  
  rowSizes.forEach((size, rowIndex) => {
    const itemsPerRow = rowIndex === 0 ? 2 : rowIndex === 1 ? 1 : 2
    const rowItems = items.slice(currentIndex, currentIndex + itemsPerRow)
    if (rowItems.length > 0) {
      rows.push({ items: rowItems, size })
    }
    currentIndex += itemsPerRow
  })

  return (
    <VStack spacing={4} align="stretch" width="100%">
      {rows.map((row, rowIndex) => (
        <LineupRow
          key={rowIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
        >
          {row.items.map((item, itemIndex) => {
            const transforms = [
              'skewY(3deg) scaleX(0.9)',
              'skewY(-3deg) rotate(-2deg)',
              'skewY(4deg)',
              'rotate(-5deg) skewY(-2deg)',
              'rotate(3deg) skewY(2deg)'
            ]
            const transformIndex = (rowIndex * 2 + itemIndex) % transforms.length
            
            return (
              <BandName
                key={itemIndex}
                style={{
                  fontSize: row.size,
                  transform: transforms[transformIndex]
                }}
                onClick={item.onClick}
              >
                {item.words.map((word, wordIndex) => (
                  <BandWord
                    key={wordIndex}
                    className={`band-word ${word.small ? 'small-word' : ''} ${word.highlight ? 'highlight' : ''}`}
                    fontFamily={word.fontFamily}
                  >
                    {word.text}
                  </BandWord>
                ))}
              </BandName>
            )
          })}
        </LineupRow>
      ))}
    </VStack>
  )
}

export default LineupSection