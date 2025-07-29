import { Box, Container, Heading, Text, Button, VStack, HStack, Switch, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import Layout from '../components/layouts/article'
import dynamic from 'next/dynamic'

const FireflyAnimation = dynamic(() => import('../components/FireflySystem'), {
  ssr: false
})

const TestFireflies = () => {
  const [config, setConfig] = useState({
    fireflyCount: 80,
    usePurpleTheme: false,
    bloomStrength: 2.5,
    mouseRadius: 150,
    mouseForce: 0.3,
    fogColor: 0x0a0a2e,
    fogNear: 50,
    fogFar: 800,
    useSwirlingBackground: true,
    backgroundIntensity: 1.0
  })

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Layout>
      <Container>
        <FireflyAnimation {...config} />
        
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg="whiteAlpha.500"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading as="h3" fontSize={20} mb={4}>
            Firefly System Test
          </Heading>
          
          <VStack spacing={4} align="stretch">
            <HStack>
              <FormLabel htmlFor="purple-theme" mb="0">
                Purple Theme
              </FormLabel>
              <Switch
                id="purple-theme"
                isChecked={config.usePurpleTheme}
                onChange={(e) => updateConfig('usePurpleTheme', e.target.checked)}
              />
            </HStack>
            
            <HStack>
              <FormLabel htmlFor="swirling-bg" mb="0">
                Swirling Background
              </FormLabel>
              <Switch
                id="swirling-bg"
                isChecked={config.useSwirlingBackground}
                onChange={(e) => updateConfig('useSwirlingBackground', e.target.checked)}
              />
            </HStack>
            
            <Box>
              <Text mb={2}>Firefly Count: {config.fireflyCount}</Text>
              <HStack>
                <Button size="sm" onClick={() => updateConfig('fireflyCount', Math.max(10, config.fireflyCount - 10))}>
                  -10
                </Button>
                <Button size="sm" onClick={() => updateConfig('fireflyCount', Math.min(200, config.fireflyCount + 10))}>
                  +10
                </Button>
              </HStack>
            </Box>
            
            <Box>
              <Text mb={2}>Bloom Strength: {config.bloomStrength.toFixed(1)}</Text>
              <HStack>
                <Button size="sm" onClick={() => updateConfig('bloomStrength', Math.max(0.5, config.bloomStrength - 0.5))}>
                  -0.5
                </Button>
                <Button size="sm" onClick={() => updateConfig('bloomStrength', Math.min(5.0, config.bloomStrength + 0.5))}>
                  +0.5
                </Button>
              </HStack>
            </Box>
            
            <Box>
              <Text mb={2}>Background Intensity: {config.backgroundIntensity.toFixed(1)}</Text>
              <HStack>
                <Button size="sm" onClick={() => updateConfig('backgroundIntensity', Math.max(0.0, config.backgroundIntensity - 0.1))}>
                  -0.1
                </Button>
                <Button size="sm" onClick={() => updateConfig('backgroundIntensity', Math.min(2.0, config.backgroundIntensity + 0.1))}>
                  +0.1
                </Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
        
        <Box
          borderRadius="lg"
          p={3}
          bg="whiteAlpha.500"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading as="h4" fontSize={16} mb={2}>
            Features Added:
          </Heading>
          <Text fontSize={14}>
            • Van Gogh-inspired swirling background effect
            <br />
            • Enhanced firefly behavior with improved physics
            <br />
            • Better mobile responsiveness and clustering
            <br />
            • Interactive controls for testing
            <br />
            • Smooth mouse interaction and swirling motion
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default TestFireflies