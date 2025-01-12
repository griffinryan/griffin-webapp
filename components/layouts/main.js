import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelLoader from '../voxel-loader'
import SplashScreen from '../SplashScreen'

const LazyVoxel = dynamic(() => import('../voxel'), {
  ssr: false,
  loading: () => <VoxelLoader />
});

const LazyRain = dynamic(() => import('../rainanimation'), {
    ssr: false,
    loading: () => <SplashScreen />, // Use the same splash screen or a placeholder
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Griffin Ryan's homepage" />
        <meta name="author" content="Griffin Ryan" />
        <meta name="author" content="Torpoise" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Griffin Ryan" />
        <meta name="og:title" content="Griffin Ryan" />
        <meta property="og:type" content="website" />
        <title>Griffin Ryan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyRain />
      </Container>

      <Container maxW="container.md" pt={14}>
        <LazyVoxel />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
