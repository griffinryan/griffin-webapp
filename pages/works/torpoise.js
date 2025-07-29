import { Container, AspectRatio, Box } from "@chakra-ui/react"
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
import { GlassContainer } from '../../components/glass-container'

const Work = () => (
    <Layout title='Torpoise'>
        <Container>
            <WorkTitle badges={['2016-2021', 'Electronic Music', 'Seattle Artist']}>
                Torpoise
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Torpoise is the pseudonym for Griffin Ryan's electronic music project based in Seattle, Washington. 
                    Having seen notable success in the Seattle music scene after releasing the 2016 album 'Rewind', 
                    electronic artist 'Torpoise' (A.K.A Griffin Ryan) has performed for recognized institutions 
                    such as KEXP, Neumos, and the Museum of Pop Culture. The project explores experimental soundscapes 
                    and innovative production techniques.
                </WorkDescription>
            </WorkSection>

            <WorkHero src='/images/works/thumb_torpoise.png' alt='Torpoise live performance' />

            <WorkSection title="Live Performances" delay={0.4}>
                <GlassContainer mb={4}>
                    <AspectRatio ratio={16 / 9} mb={4}>
                        <iframe 
                            src="https://www.youtube.com/embed/zt2uOQv7U94?si=a41ety7wFTIwbnHw"
                            title="Torpoise Live on KEXP" 
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        />
                    </AspectRatio>
                </GlassContainer>
                
                <GlassContainer>
                    <AspectRatio ratio={16 / 9}>
                        <iframe 
                            src="https://www.youtube.com/embed/sf6axoyvaSE?si=8YpNoD0jDS95-QM7"
                            title="Torpoise Performance" 
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        />
                    </AspectRatio>
                </GlassContainer>
            </WorkSection>

            <WorkSection title="Achievements & Features" delay={0.5}>
                <FeatureList features={[
                    'Seattle-based electronic artist since 2013',
                    'Live performance on KEXP radio station',
                    'Performances at Neumos and Museum of Pop Culture',
                    'Released multiple albums including "Rewind" (2016)',
                    'Focus on ambient and experimental electronic music',
                    'Innovative use of synthesizers and production techniques',
                    'Active in the Seattle underground music scene'
                ]} />
            </WorkSection>

            <WorkSection title="Musical Style" delay={0.6}>
                <TechStack technologies={[
                    'Electronic Production',
                    'Ambient Soundscapes',
                    'Synthesizers',
                    'Audio Engineering',
                    'Live Performance',
                    'Experimental Music'
                ]} />
            </WorkSection>

            <WorkSection title="Listen & Connect" delay={0.7}>
                <ProjectLinks links={[
                    { label: 'Listen on SoundCloud', url: 'https://soundcloud.com/torpoise' },
                    { label: 'Watch on YouTube', url: 'https://www.youtube.com/channel/torpoise' },
                    { label: 'Spotify Artist Page', url: 'https://open.spotify.com/artist/1mrMGfjOuLEJP3YhW2Fhu3' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'