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
    <Layout title="Lakehouse Seattle">
        <Container>
            <WorkTitle badges={['2025', 'WebGL', 'Interactive Art']}>
                Lakehouse Seattle
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Lakehouse Seattle is an immersive WebGL experience that pushes the boundaries 
                    of browser-based graphics. Created as an interactive event poster for 
                    "An Intimate Live Set Series," this project combines cutting-edge web technologies 
                    with artistic vision to deliver a festival-quality visual experience. The application 
                    features GPU-accelerated firefly particles, Van Gogh-inspired painted backgrounds, 
                    and sophisticated interactive elements that respond to user input.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_lakehouse.png' alt='Lakehouse Seattle' />

            <WorkSection title="Core Features" delay={0.4}>
                <FeatureList features={[
                    'GPU-accelerated firefly particle system with custom GLSL shaders',
                    'Van Gogh-inspired swirling background with 250+ lines of complex shader code',
                    'Interactive mouse/touch controls with spring-based physics',
                    'UI-aware particle positioning that avoids text elements',
                    'Procedural tree generation using L-system algorithms',
                    'Dynamic particle count (50-500) based on device capabilities',
                    'Performance optimizations including object pooling and frustum culling',
                    'Automated poster generation at multiple resolutions'
                ]} />
            </WorkSection>

            <WorkSection title="Technical Innovation" delay={0.5}>
                <WorkDescription>
                    The firefly system demonstrates advanced WebGL techniques, featuring custom 
                    vertex and fragment shaders that create realistic glow effects through HDR-ready 
                    rendering. Each firefly exhibits complex behavior patterns including flocking, 
                    wandering with Perlin noise, and smooth mouse attraction using Bezier curve 
                    interpolation. The Van Gogh-inspired background pushes GLSL to its limits with 
                    paint brush stroke simulation, multi-layered turbulence systems, and vortex 
                    mathematics that create an authentic painted aesthetic in real-time.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Architecture & Performance" delay={0.6}>
                <WorkDescription>
                    Built with a modular component system, Lakehouse employs sophisticated 
                    performance optimizations to maintain 60 FPS even with hundreds of particles. 
                    The architecture includes object pooling for particle reuse, frustum culling 
                    for off-screen elements, a dynamic LOD system, batch rendering with single 
                    draw calls, and intelligent quality adjustment based on device capabilities. 
                    The UI boundary management system ensures particles avoid interactive text 
                    elements, maintaining readability while preserving the immersive experience.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Interactive Design" delay={0.7}>
                <FeatureList features={[
                    'MouseFollowText: Text elements orbit cursor with spring physics',
                    'TextSwirl: Letters explode into particles and swirl away on interaction',
                    'Click burst effects create particle explosions',
                    'Scroll-based parallax with depth perception',
                    'Touch-optimized controls for mobile devices',
                    'Per-letter animations with staggered timing',
                    'Velocity-based rotation effects for dynamic movement'
                ]} />
            </WorkSection>

            <WorkSection title="Artistic Vision" delay={0.8}>
                <WorkDescription>
                    The project achieves a unique concert poster aesthetic that blends technology 
                    with artistry. The color palette features coral pink highlights, warm yellow 
                    accents, and deep atmospheric blues that create a cohesive visual language. 
                    Every element, from the firefly behavior to the Van Gogh swirls, contributes 
                    to an experience that feels both cutting-edge and timeless, demonstrating 
                    that code can be a medium for creating beauty.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Technology Stack" delay={0.9}>
                <TechStack technologies={[
                    'Three.js v0.178.0',
                    'WebGL/GLSL',
                    'Vite',
                    'ES6 Modules',
                    'Puppeteer',
                    'Custom Shaders',
                    'Simplex Noise',
                    'Spring Physics'
                ]} />
            </WorkSection>

            <WorkSection title="Resources & Links" delay={1.0}>
                <ProjectLinks links={[
                    { label: 'GitHub Repository', url: 'https://github.com/griffinryan/lakehouse' },
                    { label: 'Three.js Documentation', url: 'https://threejs.org/docs/' },
                    { label: 'WebGL Fundamentals', url: 'https://webglfundamentals.org/' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'