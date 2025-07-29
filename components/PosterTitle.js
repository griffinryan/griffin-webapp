import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const MotionSpan = motion.span

const StyledLetter = styled(MotionSpan)`
  display: inline-block;
  font-family: ${props => props.fontFamily || "'Permanent Marker', cursive"};
  letter-spacing: -0.05em;
  margin: 0 -0.01em;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    animation: lazyRotate 2s ease-in-out infinite;
    filter: brightness(1.3);
    z-index: 10;
  }

  @keyframes lazyRotate {
    0% { 
      transform: rotate(0deg) scale(1);
    }
    25% { 
      transform: rotate(15deg) scale(1.15);
    }
    50% { 
      transform: rotate(0deg) scale(1.2);
    }
    75% { 
      transform: rotate(-15deg) scale(1.15);
    }
    100% { 
      transform: rotate(0deg) scale(1);
    }
  }

  @keyframes letterDance {
    0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
    50% { transform: translateY(-5px) rotate(calc(var(--rotation) * -1)); }
  }
`

const letterRotations = [
  -8, 12, -5, 7, -10, 4, -6, 9, -3, 11, -7, 5, -9, 6, -4, 8
]

const PosterTitle = ({ 
  text, 
  fontSize = { base: '3rem', md: '5rem', lg: '6rem' },
  fontFamily,
  colorPattern = ['coral', 'yellow', 'default'], // Pattern for coloring letters
  enableHover = true,
  animate = true
}) => {
  const letters = text.split('')
  let colorIndex = 0

  return (
    <Box
      display="inline-block"
      lineHeight={0.9}
      mb={4}
      css={{
        '&:hover .poster-letter': enableHover ? {
          animation: 'letterDance 0.5s ease-in-out infinite',
          animationDelay: 'calc(var(--index) * 0.05s)'
        } : {}
      }}
    >
      {letters.map((letter, index) => {
        if (letter === ' ') {
          return <span key={index} style={{ display: 'inline-block', width: '0.3em' }} />
        }

        const rotation = letterRotations[index % letterRotations.length]
        const colorType = colorPattern[colorIndex % colorPattern.length]
        colorIndex++

        let color, textShadow
        switch (colorType) {
          case 'coral':
            color = '#ff6b6b'
            textShadow = '0 0 25px rgba(255, 107, 107, 0.6), 0 0 50px rgba(255, 107, 107, 0.3)'
            break
          case 'yellow':
            color = '#fbbf24'
            textShadow = '0 0 25px rgba(251, 191, 36, 0.6), 0 0 50px rgba(251, 191, 36, 0.3)'
            break
          default:
            color = '#fef3c7'
            textShadow = '0 0 20px rgba(254, 243, 199, 0.3), 0 0 40px rgba(254, 243, 199, 0.2)'
        }

        return (
          <StyledLetter
            key={index}
            className="poster-letter"
            fontFamily={fontFamily}
            initial={animate ? { opacity: 0, y: 30 } : {}}
            animate={animate ? { 
              opacity: 1, 
              y: 0,
              rotate: rotation,
              translateY: `${Math.sin(index) * 3}px`
            } : {
              rotate: rotation,
              translateY: `${Math.sin(index) * 3}px`
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            style={{
              fontSize,
              color,
              textShadow,
              '--rotation': `${rotation}deg`,
              '--index': index
            }}
          >
            {letter}
          </StyledLetter>
        )
      })}
    </Box>
  )
}

export default PosterTitle