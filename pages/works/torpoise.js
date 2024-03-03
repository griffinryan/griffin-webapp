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
                Torpoise <Badge>2022</Badge>
            </Title>
            <P>
                Torpoise (A.K.A Griffin Ryan) is a Seattle-based electronic artist since 2013.
            </P>
            <P>
                <Link href='https://www.youtube.com/watch?v=1ZbsWzYA55Q' target='_blank'>
                    Torpoise <ExternalLinkIcon mx='2px' />
                </Link>
                can be found all over the web!
            </P>

            <WorkImage src='/images/works/thumb_torpoise.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
