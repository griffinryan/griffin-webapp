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
    <Layout title='Dungeon Adventure'>
        <Container>
            <WorkTitle badges={['2021', 'Game Development', 'Team Project']}>
                Dungeon Adventure
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Dungeon Adventure is a captivating 2D roguelike dungeon crawler that combines classic gameplay 
                    mechanics with modern development practices. Built from the ground up using JavaFX and JDK11, 
                    this game features procedurally generated dungeons, challenging enemies, and persistent progression 
                    through an SQLite database system. A collaborative project showcasing advanced Java programming 
                    and game design principles.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_dungeon.png' alt='Dungeon Adventure gameplay' />

            <WorkSection title="Key Features" delay={0.4}>
                <FeatureList features={[
                    'Procedurally generated dungeon layouts for infinite replayability',
                    'SQLite database for saving game progress and high scores',
                    'JavaFX-based UI with smooth animations',
                    'Turn-based combat system with various enemy types',
                    'Inventory management and item collection mechanics',
                    'Multiple difficulty levels and character classes',
                    'Collaborative development using Git and GitHub'
                ]} />
            </WorkSection>

            <WorkSection title="Technologies" delay={0.5}>
                <TechStack technologies={[
                    'Java',
                    'JavaFX',
                    'SQLite',
                    'JDK 13',
                    'Git',
                    'Object-Oriented Design',
                    'Game Engine Architecture'
                ]} />
            </WorkSection>

            <WorkSection title="Links & Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'View on GitHub', url: 'https://github.com/HuskyDevClub/DungeonAdventure' },
                    { label: 'Personal Repository', url: 'https://github.com/griffinryan/dungeon-adventure' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'