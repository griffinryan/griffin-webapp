import { Container } from "@chakra-ui/react"
import Layout from '../../components/layouts/article'
import { 
  WorkTitle, 
  WorkHero, 
  WorkSection, 
  WorkDescription,
  FeatureList,
  TechStack,
  ProjectLinks 
} from '../../components/work-enhanced'

const Work = () => (
    <Layout title='Hollowscape'>
        <Container>
            <WorkTitle badges={['2022', 'Game Development', 'Vanilla JS']}>
                Hollowscape
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Hollowscape is an immersive 2D adventure-platformer built entirely with vanilla JavaScript, 
                    showcasing the power of native web technologies without external dependencies. This project 
                    demonstrates advanced game development concepts including a custom physics engine, collision 
                    detection, and sprite animation system—all implemented from scratch using the Canvas API.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_hollowscape.png' alt='Hollowscape gameplay' />

            <WorkSection title="Game Features" delay={0.4}>
                <FeatureList features={[
                    'Pure JavaScript implementation with no dependencies',
                    'Custom game engine built from scratch',
                    'Canvas-based rendering system for smooth graphics',
                    'Entity-component architecture for game objects',
                    'Built-in physics engine with gravity and collisions',
                    'Sprite animation system for character movement',
                    'Level design with tile-based maps',
                    'Responsive controls for keyboard input'
                ]} />
            </WorkSection>

            <WorkSection title="Technologies" delay={0.5}>
                <TechStack technologies={[
                    'JavaScript',
                    'Canvas API',
                    'HTML5',
                    'CSS3',
                    'Game Physics',
                    'Collision Detection',
                    'Sprite Animation'
                ]} />
            </WorkSection>

            <WorkSection title="Links & Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'View on GitHub', url: 'https://github.com/TCSS491Black1/Game' },
                    { label: 'Personal Repository', url: 'https://github.com/griffinryan/hollowscape' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'