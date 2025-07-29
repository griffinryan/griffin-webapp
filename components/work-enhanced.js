import NextLink from 'next/link'
import { 
  Heading, 
  Box, 
  Image, 
  Link, 
  Badge, 
  Text,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { GlassContainer, AnimatedSection } from './glass-container'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

export const WorkTitle = ({ children, badges = [] }) => {
  const titleColor = useColorModeValue('coral.500', 'coral.400')
  const linkColor = useColorModeValue('sunset.500', 'sunset.400')
  
  return (
    <AnimatedSection delay={0.1}>
      <Box mb={6}>
        <Link 
          as={NextLink} 
          href="/portfolio"
          color={linkColor}
          fontSize="sm"
          _hover={{
            textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
            color: useColorModeValue('sunset.600', 'sunset.300')
          }}
        >
          Portfolio
        </Link>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading 
          display="inline-block" 
          as="h1" 
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          fontFamily="'Black Ops One', sans-serif"
          color={titleColor}
          textShadow="0 0 40px rgba(255, 107, 107, 0.5), 0 0 80px rgba(255, 107, 107, 0.3)"
          letterSpacing="0.02em"
          textTransform="uppercase"
          mb={4}
        >
          {children}
        </Heading>
        
        <HStack spacing={2} mt={2}>
          {badges.map((badge, index) => (
            <Badge
              key={index}
              colorScheme={useColorModeValue('purple', 'teal')}
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
            >
              {badge}
            </Badge>
          ))}
        </HStack>
      </Box>
    </AnimatedSection>
  )
}

export const WorkHero = ({ src, alt }) => (
  <AnimatedSection delay={0.2}>
    <MotionBox
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      mb={8}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <MotionImage 
        borderRadius="lg" 
        w="full" 
        src={src} 
        alt={alt}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </MotionBox>
  </AnimatedSection>
)

export const WorkSection = ({ title, children, delay = 0.3 }) => (
  <AnimatedSection delay={delay}>
    <GlassContainer mb={6}>
      <VStack align="stretch" spacing={4}>
        {title && (
          <Heading
            as="h2"
            size="md"
            fontFamily="'Bebas Neue', sans-serif"
            letterSpacing="0.02em"
            color={useColorModeValue('purple.600', 'sunset.400')}
            textTransform="uppercase"
          >
            {title}
          </Heading>
        )}
        {children}
      </VStack>
    </GlassContainer>
  </AnimatedSection>
)

export const FeatureList = ({ features }) => (
  <List spacing={3}>
    {features.map((feature, index) => (
      <ListItem key={index} display="flex" alignItems="flex-start">
        <ListIcon
          as={ChevronRightIcon}
          color={useColorModeValue('coral.500', 'coral.400')}
          mt={1}
          flexShrink={0}
        />
        <Text fontSize="md" lineHeight="tall">
          {feature}
        </Text>
      </ListItem>
    ))}
  </List>
)

export const TechStack = ({ technologies }) => {
  const badgeScheme = useColorModeValue('purple', 'teal')
  
  return (
    <HStack spacing={2} flexWrap="wrap">
      {technologies.map((tech, index) => (
        <Badge
          key={index}
          colorScheme={badgeScheme}
          fontSize="sm"
          px={3}
          py={1}
          borderRadius="full"
          mb={2}
        >
          {tech}
        </Badge>
      ))}
    </HStack>
  )
}

export const ProjectLinks = ({ links }) => {
  const linkColor = useColorModeValue('sunset.500', 'sunset.400')
  
  return (
    <VStack align="stretch" spacing={3}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          fontSize="md"
          color={linkColor}
          _hover={{
            textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
            color: useColorModeValue('sunset.600', 'sunset.300'),
            transform: 'translateX(4px)'
          }}
          display="flex"
          alignItems="center"
          gap={2}
          transition="all 0.3s ease"
        >
          {link.label}
          <ExternalLinkIcon />
        </Link>
      ))}
    </VStack>
  )
}

export const WorkDescription = ({ children }) => (
  <Text
    fontSize="lg"
    lineHeight="tall"
    color={useColorModeValue('gray.600', 'gray.300')}
    fontFamily="'M PLUS Rounded 1c', sans-serif"
  >
    {children}
  </Text>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)