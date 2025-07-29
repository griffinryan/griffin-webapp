import { Box, Badge, Text, VStack, UnorderedList, ListItem, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { cosineWiggle } from '../styles/animations'

const ExperienceContainer = styled(Box)`
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(136, 204, 202, 0.1) 0%, rgba(255, 99, 195, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
    
    .company-name {
      animation: ${cosineWiggle} 1.5s ease-in-out infinite;
    }
  }
`

const YearBadge = styled(Badge)`
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Space Mono', monospace;
`

const RoleTitle = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  color: ${props => props.color};
`

const CompanyName = styled(Text)`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Space Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Description = styled(Box)`
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::marker {
      color: ${props => props.markerColor};
    }
  }
`

export const ExperienceEntry = ({ year, role, company, description, bullets }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const roleColor = useColorModeValue('#3d7aed', '#ff63c3')
  const markerColor = useColorModeValue('#88ccca', '#88ccca')
  
  return (
    <ExperienceContainer
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
    >
      <VStack align="stretch" spacing={2}>
        <Box>
          <YearBadge colorScheme="teal">{year}</YearBadge>
        </Box>
        
        <Box>
          <RoleTitle color={roleColor}>{role}</RoleTitle>
          <CompanyName className="company-name">{company}</CompanyName>
        </Box>
        
        <Description markerColor={markerColor}>
          {description && <Text mb={2}>{description}</Text>}
          
          {bullets && bullets.length > 0 && (
            <UnorderedList spacing={2}>
              {bullets.map((bullet, index) => (
                <ListItem key={index}>{bullet}</ListItem>
              ))}
            </UnorderedList>
          )}
        </Description>
      </VStack>
    </ExperienceContainer>
  )
}