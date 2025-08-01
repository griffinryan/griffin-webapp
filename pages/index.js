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
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbnailTorpoiseSpotify from '../public/images/links/torpoisespotify.png'
import thumbnailTorpoiseKEXP from '../public/images/links/torpoisekexp.png'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import StylizedParagraph from '../components/stylized-paragraph'
import { GlassPanel } from '../components/glass-panel'
import { BioSection, BioYear } from '../components/bio'
import dynamic from 'next/dynamic'

// Dynamic imports to avoid SSR issues with canvas
const ChalkDrawingText = dynamic(() => import('../components/ChalkDrawingText'), {
  ssr: false
})

const ChalkDrawingFooter = dynamic(() => import('../components/ChalkDrawingFooter'), {
  ssr: false
})

const MotionBox = motion(Box)
const MotionText = motion(Text)

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box mb={6}>
        <ChalkDrawingText delay={0.2} />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" fontFamily="'Bebas Neue', sans-serif" fontSize="4xl" letterSpacing="0.02em">
            Griffin Ryan
          </Heading>
          <p>Software Engineer | Fullstack Developer | Electronic Artist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/griffin.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <GlassPanel variant="default" delay={0.1}>
          <Heading as="h3" variant="section-title" fontFamily="'Black Ops One', sans-serif" fontSize="xl">
            Work
          </Heading>
          <StylizedParagraph>
            Griffin Ryan is a full-stack developer based in Seattle, Washington with a
            passion for building technologies. As a coder, his interests lie in artificial 
            intelligence, {' '}
            <Link as={NextLink} href="/works/cgi" passHref scroll={false}>
              3D rendering mathematics
            </Link>, and{' '}
            <Link as={NextLink} href="/works/doter" passHref scroll={false}>
              natural language processing
            </Link>.
          </StylizedParagraph>
          <StylizedParagraph>Having seen 
            notable success in the Seattle music scene, electronic artist {' '}
          <Link as ={NextLink} href='/works/torpoise' passHref scroll={false}>
            'Torpoise' (A.K.A Griffin Ryan)
          </Link>
          {' '} has performed for recognized institutions
          such as KEXP, Neumos, and the Museum of Pop Culture. 
          While not playing music or programming, Griffin is an automotive enthusiast.</StylizedParagraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/experience"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              fontFamily="'Bebas Neue', sans-serif"
              fontSize="lg"
              letterSpacing="0.02em"
            >
              Look at My Experience
            </Button>
          </Box>
        </GlassPanel>
      </Section>

      <Section delay={0.2}>
        <GlassPanel variant="coral" delay={0.2}>
          <Heading as="h3" variant="section-title" fontFamily="'Black Ops One', sans-serif" fontSize="xl">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Working as a Computer Science Tutor at the University of Washington
          </BioSection>
          <BioSection>
            <BioYear>2023-2024</BioYear>
            Completed the Bachelor's Program in Computer Science at
            the University of Washington
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Working as a part-time AI Engineer with Outlier AI
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Started working on LLaMa 4 at Meta Platforms
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>
            Fulltime AI Agent Developer at ConsumerFi
          </BioSection>
        </GlassPanel>
      </Section>


      <Section delay={0.4}>
        <GlassPanel variant="sunset" delay={0.3}>
          <Heading as="h3" variant="section-title" fontFamily="'Black Ops One', sans-serif" fontSize="xl">
            On the web
          </Heading>
          <List>
          <ListItem>
            <Link href="https://github.com/griffinryan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="500"
              >
                @griffinryan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/griffinlryan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="500"
              >
                @griffinlryan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/griffinlryan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="500"
              >
                @griffinlryan
              </Button>
            </Link>
          </ListItem>
        </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/watch?v=zt2uOQv7U94&ab_channel=KEXP"
              title="Torpoise Live on KEXP"
              thumbnail={thumbnailTorpoiseKEXP}
            />
            <GridItem
              href="https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3?si=RULxR971TJCjtDkjhrOVEA"
              title="Torpoise on Spotify"
              thumbnail={thumbnailTorpoiseSpotify}
            />
          </SimpleGrid>
        </GlassPanel>
      </Section>

      {/* Footer - Concert Poster Style */}
      <Box as="footer" textAlign="center" py={16}>
        <ChalkDrawingFooter delay={0.5} />
      </Box>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
