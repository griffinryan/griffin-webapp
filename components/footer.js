import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; Copyright {new Date().getFullYear()} Griffin Ryan. All Rights Reserved.
    </Box>
  )
}

export default Footer
