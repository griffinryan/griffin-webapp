// Example component showing concert poster body font usage
import { Box, Text } from '@chakra-ui/react'
import StylizedParagraph from './stylized-paragraph'
import { getPosterTextVariant } from '../lib/poster-text-utils'

const PosterBodyExample = () => {
  return (
    <Box p={8}>
      {/* Standard body text with concert poster styling */}
      <StylizedParagraph>
        Welcome to the show! Experience the rhythm and passion of live music in an intimate setting where every beat matters.
      </StylizedParagraph>

      {/* Quote style */}
      <Box my={6}>
        <Text 
          sx={getPosterTextVariant('quote')}
          className="poster-text-hover"
          fontSize="lg"
          color="coral.300"
        >
          "Where the music speaks louder than words"
        </Text>
      </Box>

      {/* Emphasis text */}
      <Text 
        sx={getPosterTextVariant('emphasis')}
        className="poster-emphasis"
        fontSize="xl"
        mb={4}
      >
        LIVE PERFORMANCES EVERY NIGHT
      </Text>

      {/* Mixed font paragraph */}
      <StylizedParagraph variant="dynamic">
        Create unforgettable memories with passionate artists who inspire through their craft. Join us for an evening of pure musical magic.
      </StylizedParagraph>

      {/* Callout style */}
      <Box 
        sx={getPosterTextVariant('callout')}
        className="poster-compress"
        color="sunset.400"
        my={4}
      >
        Doors open at 7PM • Show starts at 8PM
      </Box>
    </Box>
  )
}

export default PosterBodyExample