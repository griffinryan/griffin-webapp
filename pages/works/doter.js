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
    <Layout title='Doter Editor'>
        <Container>
            <Title>
                Doter Editor <Badge>2022</Badge>
            </Title>
            <P>
                Doter Editor is a code-editor that supports 50+ languages
                including C#, C++, Java, Python, Rust, and more!
            </P>
            <P>
                <Link href='https://github.com/griffinryan/DoterEditor' target='_blank'>
                    Doter Editor <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_doter.png' alt='Website' />
            
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
