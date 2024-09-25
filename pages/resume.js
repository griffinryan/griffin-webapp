import {Container, Heading, Divider, Badge, Box, Button} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
// maybe imports for tsParticles?????

const Resume = () => (
    <Layout title='Resume'>
        <Container>

            <Heading as ="h3" fontSize={20} mb={4}>
                Resume
            </Heading>
            <Divider/>

            <Section delay={0.2}>
                <Box align ='center' my={4}>
                    <Button
                        as={NextLink}
                        href="https://torpoisebucket.s3.us-west-2.amazonaws.com/Griffin-Resume.pdf"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme='teal'
                    >
                        Download Resume
                    </Button>
                </Box>
            </Section>

        </Container>
    </Layout>

)

export default Resume
export { getServerSideProps } from '../components/chakra'
