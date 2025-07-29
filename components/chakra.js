import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
  CSSReset
} from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <CSSReset />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
