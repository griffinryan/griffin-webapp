import { Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)

const StylizedParagraph = ({ children, ...props }) => {
  const textColor = useColorModeValue('gray.700', 'cream')
  const shadowColor = useColorModeValue(
    '0 0 10px rgba(186, 85, 211, 0.1)', 
    '0 0 15px rgba(254, 243, 199, 0.05)'
  )

  return (
    <MotionText
      fontSize={{ base: 'md', md: 'lg' }}
      lineHeight="tall"
      fontFamily="'Space Grotesk', sans-serif"
      fontWeight="500"
      letterSpacing="0.015em"
      color={textColor}
      textShadow={shadowColor}
      mb={4}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        textIndent: '1.5em',
        '&::first-letter': {
          fontSize: '1.5em',
          fontFamily: "'Bebas Neue', sans-serif",
          fontWeight: 'bold',
          lineHeight: '1',
          marginRight: '0.05em',
          color: useColorModeValue('coral.500', 'coral.400'),
          textShadow: useColorModeValue(
            '0 0 20px rgba(255, 107, 107, 0.3)',
            '0 0 30px rgba(255, 107, 107, 0.4)'
          )
        }
      }}
      {...props}
    >
      {children}
    </MotionText>
  )
}

export default StylizedParagraph