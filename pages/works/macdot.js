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
    <Layout title="Hollowscape">
        <Container>
            <Title>
                Hollowscape <Badge>2022</Badge>
            </Title>
            <P>
                Hollowscape is a 2D adventure-platformer built in a scratch vanilla JavaScript engine.
            </P>
            <P>
                <Link href='https://github.com/TCSS491Black1/Game' target='_blank'>
                    Hollowscape <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_hollowscape.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
