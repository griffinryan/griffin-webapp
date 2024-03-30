import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from "@chakra-ui/react";

import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Torpoise">
        <Container>
            <Title>
                Torpoise <Badge>2016-2021</Badge>
            </Title>
            <P>
                Torpoise is the pseudonym for Griffin Ryan's electronic music project based in Seattle, Washington.
                Having seen notable success in the Seattle music scene after releasing the 2016 album `Rewind`,
                electronic artist 'Torpoise' (A.K.A Griffin Ryan) has performed for recognized institutions
                such as KEXP, Neumos, and the Musuem of Pop Culture.
            </P>

            <iframe width="500" height="157" src="https://www.youtube.com/embed/zt2uOQv7U94?si=a41ety7wFTIwbnHw"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="500" height="157" src="https://www.youtube.com/embed/sf6axoyvaSE?si=8YpNoD0jDS95-QM7"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <WorkImage src='/images/works/thumb_torpoise.png' alt='Website'/>
        </Container>
    </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
