import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Image from 'next/image'

import thumbDoter from '/public/images/works/thumb_doter.png'
// blurDataURL='L46@Zyt6vgInK%SJS5j[}us9WUs:'
import thumbHollowscape from '/public/images/works/thumb_hollowscape.png'
// blurDataURL='L598[FyZI.Io4[*0nNMwy@tQaJMw'

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
            A code editor that supports 50+ languages including Python, C#, Java, and more.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
              id="hollowscape"
              title="Hollowscape"
              thumbnail={thumbHollowscape}
          >
            Vanilla Javascript game engine for 2D development.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        </Section>
        <Section delay={0.1}>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
