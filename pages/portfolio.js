import {Container, Heading, SimpleGrid, Divider, Badge} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Image from 'next/image'

import thumbDoter from '/public/images/works/thumb_doter.png'
// blurDataURL='L46@Zyt6vgInK%SJS5j[}us9WUs:'
import thumbHollowscape from '/public/images/works/thumb_hollowscape.png'
// blurDataURL='L598[FyZI.Io4[*0nNMwy@tQaJMw'
import thumbCGI from '/public/images/works/thumb_cgi.png'
import thumbDungeon from '/public/images/works/thumb_dungeon.png'
import thumbEncryption from '/public/images/works/thumb_encryption.png'
import thumbMacdot from '/public/images/works/thumb_macdot.png'
import thumbTorpoise from '/public/images/works/thumb_torpoise.png'
import thumbJavapong from '/public/images/works/thumb_javapong.png'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Portfolio
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
              id="doter"
              title="Doter Editor"
              thumbnail={thumbDoter}
          >
            <Badge>2024</Badge> A code editor that supports 50+ languages including Python, C#, Java, and more.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="hollowscape"
              title="Hollowscape"
              thumbnail={thumbHollowscape}
          >
            <Badge>2022</Badge> Vanilla Javascript game engine for 2D development.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
              id="cgi"
              title="A CGI Study"
              thumbnail={thumbCGI}
          >
            <Badge>2020</Badge> A linear algebraic exploration of modern 3D rendering mathematics and
            computer generated imagery.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
              id="dungeonadventure"
              title="Dungeon Adventure"
              thumbnail={thumbDungeon}
          >
            <Badge>2021</Badge> A rougelike dungeon crawler implemented in JDK 13, JavaFX, and SQLite.
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
              id="encryption"
              title="encryption-suite"
              thumbnail={thumbEncryption}
          >
            <Badge>2024</Badge> An encryption suite in Java featuring SHA-256, CSHAKE-256, KMACXOF-256, and
            more algorithms with unique salting for hashing utility and file-signing/file-verification.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
              id="macdot"
              title="Macdot"
              thumbnail={thumbMacdot}
          >
            <Badge>2019</Badge> A dotfile CLI utility tool to manage new systems for macOS and Arch Linux.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem
              id="torpoise"
              title="Torpoise"
              thumbnail={thumbTorpoise}
          >
            <Badge>2016</Badge> Torpoise (A.K.A Griffin Ryan) is a Seattle-based electronic artist since 2013.
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
          <WorkGridItem
              id="javapong"
              title="Javapong"
              thumbnail={thumbJavapong}
          >
            <Badge>2017</Badge> A simple Pong-style game in Java using the Swing AWT graphics API.
          </WorkGridItem>
        </Section>



      </SimpleGrid>

    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
