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
    <Layout title="Encryption-Suite">
        <Container>
            <Title>
                encryption-suite <Badge>2024</Badge>
            </Title>
            <P>
                encryption-suite is a Java cryptography suite to handle encryption/decryption, as well
                as file signing, verification and more. encryption-suite features a custom hashing library
                that implements SHA256, CSHAKE256, and KMACXOF256 algorithms. It is also able to
                encrypt/decrypt a given file or text input using DHIES encryption and Schnorr signatures
                with elliptic curves.
            </P>
            <P>
                All of that encryption-suite can do is based on cryptographic algorthimic implementations
                are based of the National Institute of Standards and Technology's (NIST) specifications
                of the underlying Keccak algorithm and hashing algorithms based off of it.
                You can read about SHA-3 derived functions like cSHAKE and KMAC {' '}
                <Link href='https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf' target='_blank'>
                    here
                </Link>
                {' '}from the NIST Special Publication archive directly!
            </P>
            <P>
                <Link href='https://github.com/griffinryan/encryption-suite' target='_blank'>
                    encryption-suite <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_encryption.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
