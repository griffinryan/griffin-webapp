import {
  Container,
  Heading,
  Box,
  Text,
  Badge,
  Link,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const ExperienceItem = ({ company, role, date, link, children, delay = 0 }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  const hoverBgColor = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.2)')
  
  return (
    <Section delay={delay}>
      <MotionBox
        p={6}
        borderRadius="lg"
        bg={bgColor}
        css={{ backdropFilter: 'blur(10px)' }}
        whileHover={{
          backgroundColor: hoverBgColor,
        }}
        transition={{ duration: 0.3 }}
      >
        <VStack align="stretch" spacing={3}>
          <Box>
            {link ? (
              <Link href={link} target="_blank" _hover={{ textDecoration: 'none' }}>
                <Heading
                  as="h3"
                  size="lg"
                  fontFamily="'Black Ops One', sans-serif"
                  color={useColorModeValue('coral.500', 'coral.400')}
                  _hover={{
                    textShadow: '0 0 20px rgba(255, 107, 107, 0.6)',
                    transform: 'scale(1.02)'
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  {company}
                </Heading>
              </Link>
            ) : (
              <Heading
                as="h3"
                size="lg"
                fontFamily="'Black Ops One', sans-serif"
                color={useColorModeValue('coral.500', 'coral.400')}
              >
                {company}
              </Heading>
            )}
            <HStack spacing={4} mt={2}>
              <Text
                fontSize="xl"
                fontFamily="'Bebas Neue', sans-serif"
                letterSpacing="0.02em"
                color={useColorModeValue('purple.600', 'sunset.400')}
              >
                {role}
              </Text>
              <Badge
                colorScheme={useColorModeValue('purple', 'teal')}
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
              >
                {date}
              </Badge>
            </HStack>
          </Box>
          <List spacing={2}>
            {children}
          </List>
        </VStack>
      </MotionBox>
    </Section>
  )
}

const BulletPoint = ({ children }) => (
  <ListItem display="flex" alignItems="flex-start">
    <ListIcon
      as={ChevronRightIcon}
      color={useColorModeValue('coral.500', 'coral.400')}
      mt={1}
      flexShrink={0}
    />
    <Text fontSize="md" lineHeight="tall">
      {children}
    </Text>
  </ListItem>
)

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading 
        as="h3" 
        fontSize={20} 
        mb={4}
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.02em"
      >
        Experience
      </Heading>
      <Divider mb={6} />

      <ExperienceItem
        company="PlayEmber"
        role="Full Stack AI Agent Developer"
        date="June 2025 - Present"
        link="https://consumerfi.ai"
        delay={0.1}
      >
        <BulletPoint>
          Architected and built a full-stack Web3 gamification ecosystem, integrating Next.js 15 and TypeScript for a highly interactive user experience,
          featuring real-time AI chat and multi-chain wallet authentication via Privy.io, significantly enhancing user engagement.
        </BulletPoint>
        <BulletPoint>
          Developed responsive and performant UI, utilizing Tailwind CSS v4 and React Query v5, with sophisticated animations and visual effects inspired
          by cyberpunk aesthetics, resulting in improved user retention and consistent positive user feedback.
        </BulletPoint>
        <BulletPoint>
          Led backend development of 13+ microservices using Fastify and TypeScript, orchestrated via Docker and docker-compose, leveraging WebSocket 
          and Kafka for robust, scalable, event-driven inter-service communication, supporting real-time interactions across the platform.
        </BulletPoint>
        <BulletPoint>
          Implemented comprehensive data management integrating PostgreSQL, Redis, and Neo4j, optimizing storage, retrieval, and querying patterns
          critical for complex systems like AI agents, blockchain transaction processing, and gamified user progress tracking.
        </BulletPoint>
        <BulletPoint>
          Built advanced Chrome browser extension (Manifest V3), using React 19, Vite, and CRXJS, capturing neural content, implementing secure cross-origin 
          authentication, and interactive 3D visualizations powered by Three.js and React Three Fiber, expanding product reach and functionality.
        </BulletPoint>
        <BulletPoint>
          Engineered an innovative compute-units service for calculating agent experience points (XP) and automating gamified reward distributions,
          significantly enhancing platform scalability and user incentives across diverse Web3 mechanics.
        </BulletPoint>
        <BulletPoint>
          Delivered a scalable, production-ready platform that integrates AI-driven interactions, real-time communications, and comprehensive Web3
          authentication, significantly advancing PlayEmber's strategic objectives in consumer engagement and retention.
        </BulletPoint>
      </ExperienceItem>

      <ExperienceItem
        company="Meta Platforms, Inc."
        role="Data Labeling Analyst III (LLaMa 4 Team)"
        date="August 2024 - July 2025"
        delay={0.2}
      >
        <BulletPoint>
          Enhanced LLaMa 4's capabilities to generate high-quality code across multiple programming languages, including Java, C#, Go, Python, C/C++,
          TypeScript, JavaScript, HTML/CSS, Rust, Bash, and SQL. Focus on enhancing code generation and reasoning through RLHF.
        </BulletPoint>
        <BulletPoint>
          Partnered with research and engineering teams to build and refine SWE (Software Engineering) agents, designed to tackle real-world programming 
          tasks autonomously. Helped drive improvements in performance, reliability, and multi-step planning, accelerating internal workflows.
        </BulletPoint>
        <BulletPoint>
          Collaborated with external vendors to optimize generative AI model accuracy and broaden specific coding scope.
        </BulletPoint>
        <BulletPoint>
          Analyzed model outputs to identify failure modes. Drove iterative improvements for significant gains in code quality and syntactic correctness.
        </BulletPoint>
        <BulletPoint>
          Contributed to internal tooling for data labeling and synthetic prompt generation, significantly accelerating model development cycles.
        </BulletPoint>
      </ExperienceItem>

      <ExperienceItem
        company="Outlier AI"
        role="AI Software Engineer"
        date="May 2024 - August 2024"
        delay={0.3}
      >
        <BulletPoint>
          Developed and optimized algorithms to improve the performance, accuracy, and efficiency of large language models like ChatGPT.
        </BulletPoint>
        <BulletPoint>
          Conducted extensive training and fine-tuning of LLMs to meet specific project requirements and improve user experience.
        </BulletPoint>
        <BulletPoint>
          Implemented advanced data processing techniques enhancing model training datasets, ensuring quality input for robust model performance.
        </BulletPoint>
      </ExperienceItem>

      <ExperienceItem
        company="University of Washington-Tacoma"
        role="Computer Science Tutor"
        date="September 2022 - May 2023"
        delay={0.4}
      >
        <BulletPoint>
          Tutored and mentored students in programming, debugging, and algorithm implementation for CS courses up to 400-level.
        </BulletPoint>
        <BulletPoint>
          Covered all subjects offered in the School of Engineering and Technology's Computer Science and Systems program.
        </BulletPoint>
      </ExperienceItem>

      {/* Education Section */}
      <Section delay={0.5}>
        <Heading
          as="h3"
          variant="section-title"
          fontFamily="'Black Ops One', sans-serif"
          fontSize="xl"
          mt={8}
          mb={4}
        >
          Education
        </Heading>
        <MotionBox
          p={6}
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <VStack align="stretch" spacing={3}>
            <Box>
              <Heading
                as="h4"
                size="md"
                fontFamily="'Bebas Neue', sans-serif"
                letterSpacing="0.02em"
                color={useColorModeValue('purple.600', 'sunset.400')}
              >
                Bachelor of Science in Computer Science and Systems
              </Heading>
              <HStack spacing={4} mt={2}>
                <Text fontWeight="bold">University of Washington Tacoma</Text>
                <Badge colorScheme="teal" fontSize="sm" px={3} py={1} borderRadius="full">
                  Fall 2021 - Spring 2024
                </Badge>
              </HStack>
            </Box>
            <List spacing={2}>
              <BulletPoint>
                Inducted into Upsilon Pi Epsilon (UPE), the international honor society for computing and information disciplines.
              </BulletPoint>
              <BulletPoint>
                Placed on the Dean's List of Academic Achievement consecutively for six quarters.
              </BulletPoint>
            </List>
          </VStack>
        </MotionBox>
      </Section>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'