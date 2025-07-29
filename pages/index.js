import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Text,
  VStack,
  HStack,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import PosterTitle from '../components/PosterTitle'
import LineupSection from '../components/LineupSection'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbnailTorpoiseSpotify from '../public/images/links/torpoisespotify.png'
import thumbnailTorpoiseKEXP from '../public/images/links/torpoisekexp.png'
import Image from 'next/image'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const Home = () => (
  <Layout>
    <Container maxW="container.xl" position="relative">
      {/* Concert Poster Hero Section */}
      <VStack spacing={8} align="center" minH="100vh" justify="center" mb={16}>
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <PosterTitle 
            text="GRIFFIN RYAN" 
            fontSize={{ base: '4rem', md: '7rem', lg: '10rem' }}
            colorPattern={['coral', 'yellow', 'coral', 'default', 'coral', 'yellow', 'default', 'coral', 'yellow', 'coral', 'default']}
          />
          
          <MotionText
            fontSize={{ base: '1.5rem', md: '2rem' }}
            fontFamily="'Anton', sans-serif"
            textTransform="uppercase"
            letterSpacing="0.3em"
            color="textSecondary"
            textShadow="0 0 20px rgba(254, 243, 199, 0.3)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Seattle, Washington
          </MotionText>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Text
            fontSize={{ base: '1rem', md: '1.25rem' }}
            fontFamily="'M PLUS Rounded 1c', sans-serif"
            textTransform="uppercase"
            letterSpacing="0.1em"
            color="textSecondary"
            mb={8}
          >
            Software Engineer • Fullstack Developer • Electronic Artist
          </Text>
        </MotionBox>

        {/* Date Display Style Element */}
        <MotionBox
          display="inline-flex"
          alignItems="baseline"
          gap="0.5em"
          fontSize={{ base: '2rem', md: '3rem' }}
          textTransform="uppercase"
          fontWeight="900"
          transform="rotate(-2deg) skewY(2deg)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          _hover={{ transform: 'rotate(-2deg) skewY(2deg) scale(1.05)' }}
        >
          <Text as="span" fontFamily="'Anton', sans-serif" color="cream" transform="scaleX(0.9)">
            EST.
          </Text>
          <Text as="span" fontFamily="'Black Ops One', sans-serif" color="sunset.400" fontSize="1.2em"
            textShadow="0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3)">
            2024
          </Text>
        </MotionBox>
      </VStack>

      {/* Experience Section as Band Lineup */}
      <Section delay={0.1}>
        <VStack spacing={12} align="center">
          <Heading as="h2" variant="section-title" fontSize={{ base: '3rem', md: '4rem' }}>
            EXPERIENCE LINEUP
          </Heading>
          
          <LineupSection
            items={[
              {
                words: [
                  { text: 'META', highlight: true },
                  { text: 'PLATFORMS', fontFamily: "'Anton', sans-serif" }
                ],
                onClick: () => {}
              },
              {
                words: [
                  { text: 'OUTLIER', fontFamily: "'Black Ops One', sans-serif" },
                  { text: 'AI', highlight: true }
                ],
                onClick: () => {}
              },
              {
                words: [
                  { text: 'UW', highlight: true, fontFamily: "'Black Ops One', sans-serif" }
                ],
                onClick: () => {}
              },
              {
                words: [
                  { text: 'BS', small: true },
                  { text: 'COMPUTER', fontFamily: "'Anton', sans-serif" },
                  { text: 'SCIENCE', highlight: true }
                ],
                onClick: () => {}
              },
              {
                words: [
                  { text: 'CSS', highlight: true },
                  { text: 'MENTOR' }
                ],
                onClick: () => {}
              }
            ]}
            rowSizes={[
              { base: '3.5rem', md: '5rem' },
              { base: '3rem', md: '4rem' },
              { base: '2.5rem', md: '3.5rem' }
            ]}
          />
        </VStack>
      </Section>

      {/* Projects Showcase */}
      <Section delay={0.3}>
        <VStack spacing={8} align="center">
          <Heading as="h2" variant="section-title" fontSize={{ base: '3rem', md: '4rem' }}>
            FEATURING
          </Heading>
          
          <Box textAlign="center" maxW="800px" mx="auto">
            <Text fontSize={{ base: 'lg', md: 'xl' }} mb={6} color="textSecondary">
              Full-stack developer with a passion for AI, 3D rendering, and electronic music production
            </Text>
            
            <HStack spacing={4} justify="center" wrap="wrap" mb={8}>
              <Link as={NextLink} href="/works/cgi" passHref scroll={false}>
                <Button variant="poster" size="lg" fontFamily="'Black Ops One', sans-serif">
                  3D RENDERING
                </Button>
              </Link>
              <Link as={NextLink} href="/works/doter" passHref scroll={false}>
                <Button variant="poster" size="lg" fontFamily="'Black Ops One', sans-serif">
                  NLP PROJECTS
                </Button>
              </Link>
              <Link as={NextLink} href="/works/torpoise" passHref scroll={false}>
                <Button variant="poster" size="lg" fontFamily="'Black Ops One', sans-serif">
                  TORPOISE
                </Button>
              </Link>
            </HStack>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as={NextLink}
                href="/portfolio"
                scroll={false}
                size="lg"
                fontSize="2xl"
                py={8}
                px={12}
                bg="coral.500"
                color="cream"
                fontFamily="'Bebas Neue', sans-serif"
                letterSpacing="0.1em"
                textTransform="uppercase"
                _hover={{
                  bg: 'coral.600',
                  textShadow: '0 0 40px rgba(255, 107, 107, 0.8)',
                  transform: 'scale(1.05)'
                }}
                rightIcon={<ChevronRightIcon boxSize={8} />}
              >
                View Full Portfolio
              </Button>
            </MotionBox>
          </Box>
        </VStack>
      </Section>

      {/* Links Section - Concert Poster Style */}
      <Section delay={0.4}>
        <VStack spacing={12} align="center" mb={16}>
          <Box textAlign="center">
            <Text
              fontSize={{ base: '1.5rem', md: '2rem' }}
              fontFamily="'Anton', sans-serif"
              textTransform="uppercase"
              letterSpacing="0.2em"
              color="textSecondary"
              mb={8}
            >
              Find Me Online
            </Text>
            
            {/* Contact Poster Style */}
            <Box className="contact-poster">
              <Box 
                fontSize="2rem" 
                color="sunset.400" 
                mb={6}
                animation="spin 8s linear infinite"
                display="inline-block"
              >
                ✦
              </Box>
              
              <HStack spacing={8} justify="center" wrap="wrap">
                <MotionBox
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -3,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link href="https://github.com/griffinryan" target="_blank">
                    <VStack spacing={2}>
                      <IoLogoGithub size="3rem" color="#ff6b6b" />
                      <Text
                        fontFamily="'Permanent Marker', cursive"
                        fontSize="xl"
                        color="coral.400"
                        textShadow="0 0 20px rgba(255, 107, 107, 0.5)"
                      >
                        GITHUB
                      </Text>
                    </VStack>
                  </Link>
                </MotionBox>
                
                <MotionBox
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 3,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link href="https://instagram.com/griffinlryan" target="_blank">
                    <VStack spacing={2}>
                      <IoLogoInstagram size="3rem" color="#fbbf24" />
                      <Text
                        fontFamily="'Permanent Marker', cursive"
                        fontSize="xl"
                        color="sunset.400"
                        textShadow="0 0 20px rgba(251, 191, 36, 0.5)"
                      >
                        INSTAGRAM
                      </Text>
                    </VStack>
                  </Link>
                </MotionBox>
                
                <MotionBox
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -3,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link href="https://www.linkedin.com/in/griffinlryan/" target="_blank">
                    <VStack spacing={2}>
                      <IoLogoLinkedin size="3rem" color="#ff6b6b" />
                      <Text
                        fontFamily="'Permanent Marker', cursive"
                        fontSize="xl"
                        color="coral.400"
                        textShadow="0 0 20px rgba(255, 107, 107, 0.5)"
                      >
                        LINKEDIN
                      </Text>
                    </VStack>
                  </Link>
                </MotionBox>
              </HStack>
            </Box>
          </Box>

          {/* Music Links - Concert Style */}
          <VStack spacing={8} align="center">
            <PosterTitle 
              text="TORPOISE LIVE" 
              fontSize={{ base: '2.5rem', md: '3.5rem' }}
              fontFamily="'Black Ops One', sans-serif"
              colorPattern={['yellow', 'coral', 'yellow', 'coral', 'yellow', 'coral', 'default', 'coral', 'yellow', 'coral', 'default']}
            />
            
            <SimpleGrid columns={[1, 2, 2]} gap={8} maxW="800px">
              <MotionBox
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GridItem
                  href="https://www.youtube.com/watch?v=zt2uOQv7U94&ab_channel=KEXP"
                  title="LIVE ON KEXP"
                  thumbnail={thumbnailTorpoiseKEXP}
                />
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GridItem
                  href="https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3?si=RULxR971TJCjtDkjhrOVEA"
                  title="STREAM ON SPOTIFY"
                  thumbnail={thumbnailTorpoiseSpotify}
                />
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </VStack>
      </Section>

      {/* Footer - Concert Poster Style */}
      <Box as="footer" textAlign="center" py={16}>
        <Text
          fontSize="sm"
          fontStyle="italic"
          letterSpacing="0.05em"
          color="textSecondary"
          fontFamily="'M PLUS Rounded 1c', sans-serif"
        >
          Where code meets creativity
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
