import {
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Link,
  Image,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { DynamicGlassContainer, AnimatedSection } from './dynamic-glass-container'
import StylizedParagraph from './stylized-paragraph'

const BulletPoint = ({ children, id }) => (
  <ListItem display="flex" alignItems="flex-start">
    <Link
      as={NextLink}
      href={`/works/${id}`}
      _hover={{ textDecoration: 'none' }}
    >
      <ListIcon
        as={ChevronRightIcon}
        color={useColorModeValue('coral.500', 'coral.400')}
        mt={1}
        flexShrink={0}
        cursor="pointer"
        _hover={{
          transform: 'translateX(4px)',
          color: useColorModeValue('coral.600', 'coral.300')
        }}
        transition="all 0.3s ease"
      />
    </Link>
    <Text 
      fontSize="md" 
      lineHeight="tall"
      fontFamily="'Anton', 'Space Grotesk', sans-serif"
      fontWeight="500"
      letterSpacing="-0.02em"
      transition="all 0.3s ease"
      _hover={{
        letterSpacing: '-0.03em'
      }}
    >
      {children}
    </Text>
  </ListItem>
)

export const PortfolioItem = ({ 
  id,
  title, 
  year, 
  thumbnail,
  technologies = [],
  description,
  features = [],
  links = [],
  delay = 0,
  colorVariant = 'coral'
}) => {
  const titleColor = useColorModeValue('coral.500', 'coral.400')
  const techBadgeScheme = useColorModeValue('purple', 'teal')
  
  return (
    <AnimatedSection delay={delay}>
      <DynamicGlassContainer
        colorVariant={colorVariant}
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg'
        }}
      >
        <VStack align="stretch" spacing={4}>
          {/* Header with Title and Year */}
          <Box>
            <Link 
              as={NextLink} 
              href={`/works/${id}`}
              _hover={{ textDecoration: 'none' }}
            >
              <Heading
                as="h3"
                size="lg"
                fontFamily="'Black Ops One', sans-serif"
                color={titleColor}
                _hover={{
                  textShadow: '0 0 20px rgba(255, 107, 107, 0.6)',
                  transform: 'scale(1.02)'
                }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                {title}
              </Heading>
            </Link>
            
            <HStack spacing={2} mt={2} flexWrap="wrap">
              <Badge
                colorScheme="coral"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
              >
                {year}
              </Badge>
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  colorScheme={techBadgeScheme}
                  fontSize="xs"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  {tech}
                </Badge>
              ))}
            </HStack>
          </Box>

          {/* Thumbnail and Description */}
          <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
            {thumbnail && (
              <Link
                as={NextLink}
                href={`/works/${id}`}
                flexShrink={0} 
                w={{ base: 'full', md: '200px' }}
                _hover={{ textDecoration: 'none' }}
              >
                <Image
                  src={thumbnail.src || thumbnail}
                  alt={title}
                  borderRadius="md"
                  w="full"
                  h="auto"
                  objectFit="cover"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: 'lg'
                  }}
                  cursor="pointer"
                />
              </Link>
            )}
            
            <VStack align="stretch" spacing={3} flex={1}>
              <Link
                as={NextLink}
                href={`/works/${id}`}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateX(2px)'
                  }}
                >
                  <StylizedParagraph
                    variant="dynamic"
                    fontSize="md"
                    mb={0}
                    color={useColorModeValue('gray.600', 'gray.300')}
                    _hover={{
                      color: useColorModeValue('gray.700', 'gray.200')
                    }}
                  >
                    {description}
                  </StylizedParagraph>
                </Box>
              </Link>
              
              {features.length > 0 && (
                <List spacing={2}>
                  {features.map((feature, index) => (
                    <BulletPoint key={index} id={id}>{feature}</BulletPoint>
                  ))}
                </List>
              )}
            </VStack>
          </Flex>

          {/* Links */}
          {links.length > 0 && (
            <HStack spacing={4} pt={2}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  fontSize="sm"
                  color={useColorModeValue('sunset.500', 'sunset.400')}
                  _hover={{
                    textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
                    color: useColorModeValue('sunset.600', 'sunset.300')
                  }}
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {link.label}
                  <ExternalLinkIcon />
                </Link>
              ))}
            </HStack>
          )}
        </VStack>
      </DynamicGlassContainer>
    </AnimatedSection>
  )
}

export const TechBadge = ({ children, ...props }) => {
  const colorScheme = useColorModeValue('purple', 'teal')
  
  return (
    <Badge
      colorScheme={colorScheme}
      fontSize="sm"
      px={3}
      py={1}
      borderRadius="full"
      {...props}
    >
      {children}
    </Badge>
  )
}