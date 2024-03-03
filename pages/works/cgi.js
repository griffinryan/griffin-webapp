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
    <Layout title="cgi">
        <Container>
            <Title>
                A CGI Study <Badge>2021</Badge>
            </Title>
            <P>
                A CGI Study is a 2021 mathematical analysis of modern 3D rendering mathematics
                and modern computer generated imagery.
            </P>
            <P>
                <Link href='https://torpoisebucket.s3.us-west-2.amazonaws.com/A+CGI+Study+-+Griffin+Ryan.pdf' target='_blank'>
                    A CGI Study <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on a random AWS S3 bucket!
            </P>

            <WorkImage src='/images/works/thumb_cgi.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
