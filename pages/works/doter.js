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
    <Layout title='Doter Editor'>
        <Container>
            <WorkTitle badges={['2022', 'Open Source']}>
                Doter Editor
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Doter Editor is a modern, feature-rich code editor designed to support developers 
                    across multiple programming languages. With support for over 50 languages including 
                    C#, C++, Java, Python, Rust, and more, Doter Editor provides a seamless coding 
                    experience with powerful features and customization options.
                </WorkDescription>
            </WorkSection>

            <OptimizedImage src="/images/works/thumb_doter.png" alt="Doter Editor Screenshot" width={1280} height={720} priority sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '0.375rem', marginBottom: '1rem' }} />

            <WorkSection title="Key Features" delay={0.4}>
                <FeatureList features={[
                    'Support for 50+ programming languages with syntax highlighting',
                    'Intelligent code completion and IntelliSense',
                    'Customizable themes and color schemes',
                    'Built-in terminal for seamless command execution',
                    'Multi-cursor editing and powerful search/replace',
                    'Git integration for version control',
                    'Extension support for enhanced functionality',
                    'Lightweight and fast performance'
                ]} />
            </WorkSection>

            <WorkSection title="Technologies" delay={0.5}>
                <TechStack technologies={[
                    'Electron',
                    'JavaScript',
                    'Node.js',
                    'CodeMirror',
                    'HTML/CSS'
                ]} />
            </WorkSection>

            <WorkSection title="Links & Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'GitHub Repository', url: 'https://github.com/griffinryan/DoterEditor' },
                    { label: 'Download Latest Release', url: 'https://github.com/griffinryan/DoterEditor/releases' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
