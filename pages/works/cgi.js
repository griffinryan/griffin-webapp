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

import OptimizedImage from '../../components/OptimizedImage'
const Work = () => (
    <Layout title='A CGI Study'>
        <Container>
            <WorkTitle badges={['2020', 'Academic Research']}>
                A CGI Study
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Computer Generated Imagery: CGI and the Mathematical Interpretation of 3D Objects in a 2D Space 
                    is a comprehensive academic paper written for UW School of Engineering and Technology's MATH 308 course. 
                    This research details the complex matrix algebra behind rendering a 3D torus with a ray-traced 
                    illumination system, exploring the fundamental mathematics that power modern computer graphics.
                </WorkDescription>
            </WorkSection>

            <OptimizedImage src="/images/works/thumb_cgi.png" alt="CGI Study visualization" width={1280} height={720} priority sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '0.375rem', marginBottom: '1rem' }} />

            <WorkSection title="Research Topics" delay={0.4}>
                <FeatureList features={[
                    'Deep dive into transformation matrices and vector mathematics',
                    'Implementation of rendering pipeline concepts',
                    'Study of lighting models and shading techniques',
                    'Exploration of texture mapping and rasterization',
                    'Ray tracing algorithms for realistic illumination',
                    '3D torus rendering with mathematical precision'
                ]} />
            </WorkSection>

            <WorkSection title="Mathematical Concepts" delay={0.5}>
                <TechStack technologies={[
                    'Linear Algebra',
                    '3D Graphics',
                    'Matrix Transformations',
                    'Ray Tracing',
                    'Vector Mathematics',
                    'Computational Geometry'
                ]} />
            </WorkSection>

            <WorkSection title="Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'Read the Full Paper (PDF)', url: 'https://torpoisebucket.s3.us-west-2.amazonaws.com/A+CGI+Study+-+Griffin+Ryan.pdf' },
                    { label: 'View Study Materials', url: 'https://github.com/griffinryan/cgi-study' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'