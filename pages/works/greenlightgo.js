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
    <Layout title='GreenLightGo'>
        <Container>
            <WorkTitle badges={['2024', 'Game Engine', 'Open Source']}>
                GreenLightGo
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    GreenLightGo Engine is a custom-built game engine developed using Go, leveraging the powerful 
                    go-gl and GLFW libraries. Designed to provide a robust and flexible foundation for 3D game 
                    development, this engine focuses on simplicity, performance, and ease of use. Built with 
                    modern Go programming practices, it showcases the potential of Go for high-performance 
                    graphics applications.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_greenlightgo.png' alt='GreenLightGo Engine' />

            <WorkSection title="Engine Features" delay={0.4}>
                <FeatureList features={[
                    'Cross-platform compatibility across Windows, macOS, and Linux',
                    'OpenGL integration using go-gl for efficient rendering',
                    'Lightweight and efficient architecture ideal for small and large-scale projects',
                    'Modular design allowing developers to add or modify components',
                    'Basic 3D rendering capabilities with room for expansion',
                    'Input handling system for keyboard and mouse events',
                    'Window management with GLFW for smooth performance',
                    'Optimized for high performance with minimal overhead'
                ]} />
            </WorkSection>

            <WorkSection title="Technologies" delay={0.5}>
                <TechStack technologies={[
                    'Go',
                    'OpenGL',
                    'GLFW',
                    'go-gl',
                    '3D Graphics',
                    'Game Engine Architecture',
                    'Cross-Platform Development'
                ]} />
            </WorkSection>

            <WorkSection title="Links & Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'View on GitHub', url: 'https://github.com/griffinryan/greenlightgo' },
                    { label: 'go-gl OpenGL Bindings', url: 'https://github.com/go-gl/gl' },
                    { label: 'GLFW Documentation', url: 'https://www.glfw.org/documentation.html' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'