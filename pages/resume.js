import {Container, Heading, SimpleGrid, Divider, Badge} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {Button} from "@chakra-ui/react"
import Section from '../components/section'
import { useState } from 'react'

const Resume = () => (
    <Layout title='Resume'>

        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Resume
            </Heading>

            <Section>
                <Viewer
                    fileUrl='/assets/pdf-open-parameters.pdf'
                    plugins={[
                        // Register the plugins
                        defaultLayoutPluginInstance,
                        // ...more if needed.
                    ]}
                />
            </Section>

        </Container>
    </Layout>
)

export default Resume
export { getServerSideProps } from '../components/chakra'