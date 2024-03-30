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
                Computer Generated Imagery: CGI and the Mathematical Interpretation of 3D Objects in a 2D Space <Badge>2020</Badge>
            </Title>
            <P>
                A CGI Study is a 2020 paper written for UW School of Engineering and Technology's MATH 308 course.
                This paper details the complex matrix algebra behind rendering a 3D torus with a ray-traced illumination system.
            </P>
            <P>
                <Link href='https://torpoisebucket.s3.us-west-2.amazonaws.com/A+CGI+Study+-+Griffin+Ryan.pdf' target='_blank'>
                    A CGI Study <ExternalLinkIcon mx='2px' />
                </Link>
                can be found as a PDF here!
            </P>

            <WorkImage src='/images/works/thumb_cgi.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
