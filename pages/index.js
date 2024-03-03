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
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbnailTorpoiseSpotify from '../public/images/links/torpoisespotify.png'
import thumbnailTorpoiseKEXP from '../public/images/links/torpoisekexp.png'
import Image from 'next/image'

import path from 'node:path';
import fs from 'node:fs';

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const options = {
  standardFontDataUrl: '/standard_fonts/',
};

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I&apos;m a software engineer based in Seattle, Washington!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Griffin Ryan
          </Heading>
          <p>Software Engineer | Fullstack Developer | Artist</p>
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
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Griffin Ryan is a full-stack developer based in Seattle, Washington with a
          passion for building technologies. As a coder, his interests lie in artificial 
          intelligence, 3D rendering mathematic, and{' '}
          <Link as={NextLink} href="/works/doter" passHref scroll={false}>
            natural language processing
          </Link>.
        </Paragraph>
        <Paragraph>Having seen 
          notable success in the Seattle music scene, electronic artist 'Torpoise' 
          (A.K.A Griffin Ryan) has performed for recognized institutions 
          such as KEXP, Neumos, and the Musuem of Pop Culture. 
          While not playing music or programming, Griffin is an automotive enthusiast.</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2022-23</BioYear>
          CSS Mentor - UW School of Engineering and Technology.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          BS in Computer Science and Systems
          at the University of Washington
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Check out my links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/griffinryan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @griffinryan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/griffinlryan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @griffinlryan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/griffinlryan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
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
            thumbnail={thumbnailTorpoiseSpotify}>
          </GridItem>
          <GridItem
            href="https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3?si=RULxR971TJCjtDkjhrOVEA"
            title="Torpoise on Spotify"
            thumbnail={thumbnailTorpoiseKEXP}>
          </GridItem>
        </SimpleGrid>
        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
