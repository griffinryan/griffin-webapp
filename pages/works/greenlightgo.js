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
    <Layout title="greenlightgo">
        <Container>
            <Title>
                GreenLightGo <Badge>2024</Badge>
            </Title>
            <P>
            GreenLightGo Engine is a custom-built game engine developed using Go, 
            leveraging the powerful go-gl and GLFW libraries. Designed to provide a 
            robust and flexible foundation for 3D game development, this engine focuses on simplicity, 
            performance, and ease of use.
            </P>
            <P>
            Cross-Platform Compatibility: Built with GLFW, ensuring smooth performance across Windows, macOS, and Linux.
            </P>
            <P>
            OpenGL Integration: Utilizing go-gl for efficient rendering and graphics processing.
            </P>
            <P>
            Lightweight and Efficient: Optimized for high performance with minimal overhead, ideal for both small and large-scale projects.
            </P>
            <P>
            Modular Design: Easy to extend and customize with a modular architecture, allowing developers to add or modify components as needed.
            </P>
            <P>
            Early Development Stage: While in its early stages, the GreenLightGo Engine already supports basic 3D rendering, input handling, and window management.
            </P>
            <P>
            Check out {' '}
                <Link href='https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf' target='_blank'>
                    go-gl
                </Link>
                {' '}to see the OpenGL bindings library for Golang!
            </P>
            <P>
                <Link href='https://github.com/griffinryan/greenlightgo' target='_blank'>
                    GreenLightGo <ExternalLinkIcon mx='2px' />
                </Link>
                is open source and can be found on my GitHub!
            </P>

            <WorkImage src='/images/works/thumb_greenlightgo.png' alt='Website' />

        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
