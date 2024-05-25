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
    <Layout title="Javapong">
        <Container>
            <Title>
                Javapong <Badge>2017</Badge>
            </Title>
            <P>
                Javapong is a very simple Pong-styled game built in JDK 8 and Java's AWT graphics library.
            </P>
            <P>
                <Link href='https://github.com/griffinryan/javapong' target='_blank'>
                    Javapong <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_javapong.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
