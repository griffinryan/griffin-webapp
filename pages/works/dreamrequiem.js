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
    <Layout title="Dream Requiem">
        <Container>
            <WorkTitle badges={['2024', 'Game Engine', 'Open Source']}>
                Dream Requiem
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Dream Requiem Engine is a custom-built game engine developed using C#, 
                    leveraging the powerful MonoGame framework. Designed to provide a robust 
                    and flexible foundation for pseudo-3D game development, this engine focuses 
                    on simplicity, performance, and ease of use. It empowers developers to create 
                    immersive gaming experiences with minimal overhead.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_dreamrequiem.png' alt='Dream Requiem Engine' />

            <WorkSection title="Core Features" delay={0.4}>
                <FeatureList features={[
                    'Cross-platform compatibility across Windows, macOS, and Linux',
                    'Built on MonoGame framework for efficient rendering and graphics processing',
                    'Lightweight and optimized for high performance with minimal overhead',
                    'Modular architecture allowing easy extension and customization',
                    'Support for basic 3D rendering, input handling, and window management',
                    'Entity-component system for flexible game object management',
                    'Built-in physics engine for realistic game mechanics',
                    'Asset pipeline for easy content management'
                ]} />
            </WorkSection>

            <WorkSection title="Technical Architecture" delay={0.5}>
                <WorkDescription>
                    The engine utilizes a component-based architecture that allows developers 
                    to build complex game systems through composition rather than inheritance. 
                    This approach provides maximum flexibility while maintaining clean, 
                    maintainable code. The rendering pipeline is optimized for both 2D and 
                    pseudo-3D graphics, making it ideal for a wide range of game genres.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Technology Stack" delay={0.6}>
                <TechStack technologies={[
                    'C#',
                    'MonoGame',
                    'OpenGL',
                    'GLFW',
                    '.NET Core',
                    'Content Pipeline',
                    'XNA Framework'
                ]} />
            </WorkSection>

            <WorkSection title="Resources & Links" delay={0.7}>
                <ProjectLinks links={[
                    { label: 'GitHub Repository', url: 'https://github.com/griffinryan/DreamRequiem' },
                    { label: 'MonoGame Framework', url: 'https://github.com/MonoGame/MonoGame' },
                    { label: 'Documentation', url: 'https://github.com/griffinryan/DreamRequiem/wiki' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
