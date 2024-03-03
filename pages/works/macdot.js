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
    <Layout title="Macdot">
        <Container>
            <Title>
                Macdot <Badge>2022</Badge>
            </Title>
            <P>
                A dotfile CLI utility tool to manage new systems for macOS and Arch Linux.
            </P>
            <P>
                <Link href='https://github.com/Tgriffinryan/macdot' target='_blank'>
                    Macdot <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_macdot.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
