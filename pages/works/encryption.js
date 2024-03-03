// https://github.com/griffinryan/encryption-stuie
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
    <Layout title="encryption-suite">
        <Container>
            <Title>
                encryption-suite <Badge>2023</Badge>
            </Title>
            <P>
                An encryption suite in Java featuring SHA-256, CSHAKE-256, KMACXOF-256, and
                more algorithms with unique salting for hashing utility and file-signing/file-verification.
            </P>
            <P>
                <Link href='https://github.com/griffinryan/encryption-suite' target='_blank'>
                    Hollowscape <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_encryption.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
