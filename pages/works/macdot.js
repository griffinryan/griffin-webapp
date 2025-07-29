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
    <Layout title='Macdot'>
        <Container>
            <WorkTitle badges={['2019', 'CLI Tool', 'DevOps']}>
                Macdot
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Macdot is a powerful dotfile management CLI utility designed to streamline the setup and 
                    configuration of development environments across macOS and Arch Linux systems. This tool 
                    automates the process of backing up, syncing, and restoring system configurations, making 
                    it effortless to maintain consistent development environments across multiple machines.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_macdot.png' alt='Macdot CLI tool' />

            <WorkSection title="Key Features" delay={0.4}>
                <FeatureList features={[
                    'Automated dotfile backup and restoration',
                    'Cross-platform support for macOS and Arch Linux',
                    'Version control integration for configuration tracking',
                    'One-command system setup for new machines',
                    'Modular configuration management',
                    'Secure handling of sensitive configuration files',
                    'Support for custom installation scripts',
                    'Intelligent symlink management'
                ]} />
            </WorkSection>

            <WorkSection title="Technologies" delay={0.5}>
                <TechStack technologies={[
                    'Bash',
                    'Shell Scripting',
                    'macOS',
                    'Arch Linux',
                    'Git',
                    'System Administration',
                    'DevOps'
                ]} />
            </WorkSection>

            <WorkSection title="Links & Resources" delay={0.6}>
                <ProjectLinks links={[
                    { label: 'View on GitHub', url: 'https://github.com/griffinryan/macdot' },
                    { label: 'Installation Guide', url: 'https://github.com/griffinryan/macdot#installation' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'