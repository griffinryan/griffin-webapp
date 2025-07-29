import { Box, Badge, Text, VStack, UnorderedList, ListItem, useColorModeValue, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { cosineWiggle } from '../styles/animations'

// Gradient animation for the border
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// Glow pulse animation
const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(136, 204, 202, 0.3), 0 0 40px rgba(255, 99, 195, 0.2); }
  50% { box-shadow: 0 0 30px rgba(136, 204, 202, 0.5), 0 0 60px rgba(255, 99, 195, 0.4); }
  100% { box-shadow: 0 0 20px rgba(136, 204, 202, 0.3), 0 0 40px rgba(255, 99, 195, 0.2); }
`

const ExtendedContainer = styled(Box)`
  padding: 2rem;
  margin-bottom: 2.5rem;
  border-radius: 16px;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #88ccca, #ff63c3, #3d7aed, #88ccca);
    background-size: 300% 300%;
    border-radius: 16px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
    animation: ${gradientShift} 3s ease infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: ${props => props.bg};
    border-radius: 14px;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.01);
    animation: ${glowPulse} 2s ease-in-out infinite;
    
    &::before {
      opacity: 1;
    }
    
    .company-name {
      animation: ${cosineWiggle} 1.3s ease-in-out infinite;
      text-shadow: 0 0 20px rgba(255, 99, 195, 0.5);
    }
    
    .tech-badge {
      animation: ${cosineWiggle} 1.5s ease-in-out infinite;
      animation-delay: calc(var(--index) * 0.1s);
    }
  }
`

const FeaturedBadge = styled(Badge)`
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  background: linear-gradient(135deg, #ff63c3, #3d7aed);
  color: white;
  font-family: 'Space Mono', monospace;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: rotate(3deg);
  
  &:hover {
    animation: ${cosineWiggle} 1s ease-in-out infinite;
  }
`

const YearBadge = styled(Badge)`
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Space Mono', monospace;
  background: ${props => props.bg};
  border: 2px solid ${props => props.borderColor};
`

const RoleTitle = styled(Text)`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  background: linear-gradient(135deg, ${props => props.color1}, ${props => props.color2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
`

const CompanyName = styled(Text)`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Space Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.color};
`

const SectionDivider = styled(Text)`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  
  &::before,
  &::after {
    content: '━━━';
    margin: 0 0.5rem;
    opacity: 0.5;
  }
`

const Description = styled(Box)`
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.9;
  
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.8rem;
    position: relative;
    
    &::marker {
      color: ${props => props.markerColor};
      content: '▸ ';
    }
  }
`

const TechBadge = styled(Badge)`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  margin: 0.2rem;
  font-family: 'JetBrains Mono', monospace;
  background: ${props => props.bg};
  color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px ${props => props.glowColor};
    border-color: ${props => props.glowColor};
  }
`

const ImpactBox = styled(Box)`
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${props => props.bg};
  border-radius: 8px;
  border: 1px solid ${props => props.borderColor};
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
`

export const ExtendedExperienceEntry = ({ 
  year, 
  role, 
  company, 
  description, 
  sections, 
  techStack, 
  impact,
  isFeatured 
}) => {
  const bgColor = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const roleColor1 = useColorModeValue('#3d7aed', '#ff63c3')
  const roleColor2 = useColorModeValue('#88ccca', '#3d7aed')
  const companyColor = useColorModeValue('gray.700', 'gray.200')
  const dividerColor = useColorModeValue('#88ccca', '#ff63c3')
  const markerColor = useColorModeValue('#88ccca', '#88ccca')
  const techBg = useColorModeValue('gray.100', 'gray.800')
  const techColor = useColorModeValue('gray.700', 'gray.200')
  const techBorderColor = useColorModeValue('gray.300', 'gray.600')
  const techGlowColor = useColorModeValue('#88ccca', '#ff63c3')
  const impactBg = useColorModeValue('blue.50', 'gray.800')
  const impactBorderColor = useColorModeValue('blue.200', 'blue.700')
  
  return (
    <ExtendedContainer bg={bgColor}>
      {isFeatured && <FeaturedBadge>FEATURED</FeaturedBadge>}
      
      <VStack align="stretch" spacing={3}>
        <Box>
          <YearBadge 
            bg={techBg} 
            borderColor={dividerColor}
          >
            {year}
          </YearBadge>
        </Box>
        
        <Box>
          <RoleTitle color1={roleColor1} color2={roleColor2}>{role}</RoleTitle>
          <CompanyName className="company-name" color={companyColor}>
            {company}
          </CompanyName>
        </Box>
        
        <Description markerColor={markerColor}>
          {description && <Text mb={3} fontStyle="italic">{description}</Text>}
          
          {sections && sections.map((section, index) => (
            <Box key={index}>
              <SectionDivider color={dividerColor}>
                {section.title}
              </SectionDivider>
              <UnorderedList spacing={2}>
                {section.bullets.map((bullet, bulletIndex) => (
                  <ListItem key={bulletIndex}>{bullet}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
          
          {techStack && (
            <>
              <SectionDivider color={dividerColor}>
                ⚡ Technical Stack
              </SectionDivider>
              <Wrap spacing={2}>
                {techStack.map((tech, index) => (
                  <WrapItem key={index}>
                    <TechBadge 
                      className="tech-badge"
                      style={{ '--index': index }}
                      bg={techBg}
                      color={techColor}
                      borderColor={techBorderColor}
                      glowColor={techGlowColor}
                    >
                      {tech}
                    </TechBadge>
                  </WrapItem>
                ))}
              </Wrap>
            </>
          )}
          
          {impact && (
            <ImpactBox bg={impactBg} borderColor={impactBorderColor}>
              <Text fontWeight="bold" mb={1}>💫 Impact:</Text>
              <Text>{impact}</Text>
            </ImpactBox>
          )}
        </Description>
      </VStack>
    </ExtendedContainer>
  )
}