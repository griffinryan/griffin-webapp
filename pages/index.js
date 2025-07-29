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
import { ExperienceEntry } from '../components/experience-entry'
import { ExtendedExperienceEntry } from '../components/extended-experience-entry'
import { WigglyHeading } from '../styles/animations'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbnailTorpoiseSpotify from '../public/images/links/torpoisespotify.png'
import thumbnailTorpoiseKEXP from '../public/images/links/torpoisekexp.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
          intelligence, {' '}
          <Link as={NextLink} href="/works/cgi" passHref scroll={false}>
            3D rendering mathematics
          </Link>, and{' '}
          <Link as={NextLink} href="/works/doter" passHref scroll={false}>
            natural language processing
          </Link>.
        </Paragraph>
        <Paragraph>Having seen 
          notable success in the Seattle music scene, electronic artist {' '}
          <Link as ={NextLink} href='/works/torpoise' passHref scroll={false}>
            'Torpoise' (A.K.A Griffin Ryan)
          </Link>
          {' '} has performed for recognized institutions
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
        <WigglyHeading as="h3" variant="section-title">
          Experience
        </WigglyHeading>
        
        <ExtendedExperienceEntry
          year="[Your Dates] - Present"
          role="Senior Full-Stack Engineer - Web3 Platform"
          company="PlayEmber (P2A Platform)"
          description="Led the development of a comprehensive Web3 platform ecosystem consisting of three integrated applications that gamify user engagement through AI-powered interactions and blockchain technology."
          isFeatured={true}
          sections={[
            {
              title: "P2A-Client (ConsumerFi) - Web Application",
              bullets: [
                "Architected and implemented a Next.js 15 application with TypeScript, featuring real-time AI chat capabilities with persistent IndexedDB storage",
                "Integrated Privy.io authentication supporting multi-chain wallets (EVM and Solana) with seamless account linking",
                "Developed gamification system including quest tracking, leaderboards, and reward distribution using React Query v5 for optimized data fetching",
                "Built responsive UI with Tailwind CSS v4 and shadcn/ui components, implementing cyberpunk-themed animations and effects",
                "Implemented referral system with graph visualization and daily rewards mechanism"
              ]
            },
            {
              title: "P2A-Services - Microservices Backend",
              bullets: [
                "Designed and built 13+ microservices using Fastify and TypeScript, orchestrated with Docker and docker-compose",
                "Implemented event-driven architecture using Kafka and RabbitMQ for inter-service communication",
                "Integrated multiple databases (PostgreSQL, Redis, Neo4j) for optimized data storage patterns",
                "Developed services including user management, AI chat agents, quest verification, blockchain interactions (EVM/Solana), and social media integrations",
                "Created compute units service for agent XP calculations and reward distribution"
              ]
            },
            {
              title: "P2A-Extension - Chrome Browser Extension",
              bullets: [
                "Built Manifest V3 Chrome extension using React 19, Vite, and CRXJS for neural content capture",
                "Implemented secure authentication bridge between extension and web application",
                "Developed 3D visualizations using Three.js and React Three Fiber",
                "Created popup dashboard interface displaying user scores, quests, and captured content"
              ]
            }
          ]}
          techStack={[
            "Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "React Query", "Zustand",
            "Three.js", "Node.js", "Fastify", "PostgreSQL", "Redis", "Neo4j", "IndexedDB",
            "Solana Web3.js", "SPL Tokens", "EVM", "Docker", "Kafka", "RabbitMQ", "Caddy",
            "Bun", "Chrome Extension APIs"
          ]}
          impact="Created a scalable, production-ready platform that seamlessly integrates Web3 authentication, AI interactions, and gamification mechanics across web, mobile, and browser extension interfaces, supporting real-time user engagement and reward distribution."
        />
        
        <ExperienceEntry
          year="Aug 2024 - Present"
          role="Data Analyst II (LLaMa 4 Team)"
          company="Meta Platforms, Inc."
          bullets={[
            "Enhanced LLaMa 4's capabilities to generate high-quality code across multiple programming languages, including Java, C#, Go, Python, C/C++, TypeScript, JavaScript, HTML/CSS, Rust, Bash, and SQL. Focus on enhancing code generation and reasoning through RLHF.",
            "Partnered with research and engineering teams to build and refine SWE (Software Engineering) agents, designed to tackle real-world programming tasks autonomously. Helped drive improvements in performance, reliability, and multi-step planning, accelerating internal workflows.",
            "Collaborated with external vendors to optimize generative AI model accuracy and broaden specific coding scope.",
            "Analyzed model outputs to identify failure modes and drove iterative improvements, contributing to significant gains in code quality, syntactic correctness, and developer usability.",
            "Contributed to internal tooling for data labeling, synthetic prompt generation, and automated reward modeling, significantly accelerating model development cycles."
          ]}
        />
        
        <ExperienceEntry
          year="May 2024 - Aug 2024"
          role="AI Software Engineer"
          company="Outlier AI"
          bullets={[
            "Developed and optimized algorithms to improve the performance, accuracy, and efficiency of large language models like ChatGPT.",
            "Conducted extensive training and fine-tuning of LLMs to meet specific project requirements and improve user experience.",
            "Implemented advanced data processing techniques enhancing model training datasets, ensuring quality input for robust model performance."
          ]}
        />
        
        <ExperienceEntry
          year="Sep 2022 - May 2023"
          role="Computer Science Tutor"
          company="University of Washington Tacoma"
          description="Computer Science and Systems Tutor for UW Computer Science Curriculum"
          bullets={[
            "Tutored and mentored students in programming, debugging, and algorithm implementation for CS courses up to 400-level.",
            "Covered all subjects offered in the School of Engineering and Technology's Computer Science and Systems program."
          ]}
        />
        
        <BioSection>
          <BioYear>2021-2024</BioYear>
          Bachelor of Science in Computer Science and Systems - University of Washington Tacoma
        </BioSection>
        <BioSection>
          <BioYear>Honors</BioYear>
          • Inducted into Upsilon Pi Epsilon (UPE), the international honor society for computing and information disciplines.
        </BioSection>
        <BioSection>
          <BioYear>Achievement</BioYear>
          • Placed on the Dean's List of Academic Achievement consecutively for six quarters.
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
            thumbnail={thumbnailTorpoiseKEXP}>
          </GridItem>
          <GridItem
            href="https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3?si=RULxR971TJCjtDkjhrOVEA"
            title="Torpoise on Spotify"
            thumbnail={thumbnailTorpoiseSpotify}>
          </GridItem>
        </SimpleGrid>
        
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
