import { Container, Heading, VStack, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { PortfolioItem } from '../components/portfolio-item'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container>
      <Heading 
        as="h3" 
        fontSize={20} 
        mb={4}
        fontFamily="'Bebas Neue', sans-serif"
        letterSpacing="0.02em"
      >
        Portfolio
      </Heading>
      <Divider mb={6} />
      
      <VStack spacing={8} align="stretch">
        <PortfolioItem
          id="streamtools"
          title="StreamTools"
          year="2025"
          thumbnail="/images/works/thumb_streamtools.png"
          technologies={['TypeScript', 'MediaPipe', 'TensorFlow.js', 'WebGL']}
          description="Real-time ASL recognition system with clean architecture framework for browser-based hand tracking and sign language detection."
          features={[
            'Clean architecture framework with event-driven design',
            'MediaPipe integration for 21 3D hand landmarks tracking',
            'Multiple rendering modes with WebGL shaders',
            'Type-safe event bus for component communication',
            'Performance monitoring with adaptive quality settings',
            'Extensible plugin architecture for custom processors'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/streamtools' },
            { label: 'Live Demo', url: 'http://localhost:8080/demo/' }
          ]}
          delay={0.1}
          colorVariant="cyan"
        />

        <PortfolioItem
          id="lakehouse"
          title="Lakehouse Seattle"
          year="2025"
          thumbnail="/images/works/thumb_lakehouse.png"
          technologies={['Three.js', 'WebGL', 'GLSL', 'Vite', 'ES6']}
          description="An immersive WebGL experience featuring GPU-accelerated firefly particles, Van Gogh-inspired shaders, and interactive concert poster design."
          features={[
            'GPU-accelerated firefly particle system with realistic glow effects',
            'Van Gogh-inspired background with complex GLSL paint simulation',
            'Interactive mouse/touch controls with physics-based attraction',
            'Procedural tree generation using L-system algorithms',
            'UI-aware particle positioning and responsive design'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/lakehouse' }
          ]}
          delay={0.2}
          colorVariant="firefly"
        />

        <PortfolioItem
          id="dreamrequiem"
          title="Dream Requiem"
          year="2024"
          thumbnail="/images/works/thumb_dreamrequiem.png"
          technologies={['C#', 'MonoGame', 'OpenGL', 'GLFW']}
          description="A custom-built game engine leveraging MonoGame framework for pseudo-3D game development."
          features={[
            'Cross-platform compatibility across Windows, macOS, and Linux',
            'Modular architecture for easy extension and customization',
            'Optimized for high performance with minimal overhead',
            'Supports basic 3D rendering, input handling, and window management'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/DreamRequiem' },
            { label: 'MonoGame Framework', url: 'https://github.com/MonoGame/MonoGame' }
          ]}
          delay={0.3}
          colorVariant="violet"
        />

        <PortfolioItem
          id="greenlightgo"
          title="GreenLightGo"
          year="2024"
          thumbnail="/images/works/thumb_greenlightgo.png"
          technologies={['Go', 'OpenGL', 'GLFW']}
          description="An OpenGL game engine built with Go, focusing on simplicity and performance."
          features={[
            'Lightweight and efficient architecture ideal for small and large-scale projects',
            'Built with GLFW for smooth cross-platform performance',
            'Early development stage supporting basic 3D rendering capabilities',
            'Modular design allowing developers to add or modify components'
          ]}
          links={[
            { label: 'View Project', url: 'https://github.com/griffinryan/greenlightgo' }
          ]}
          delay={0.4}
          colorVariant="emerald"
        />

        <PortfolioItem
          id="doter"
          title="Doter Editor"
          year="2024"
          thumbnail="/images/works/thumb_doter.png"
          technologies={['Electron', 'JavaScript', 'Node.js']}
          description="A modern code editor supporting 50+ programming languages with syntax highlighting and advanced features."
          features={[
            'Support for Python, C#, Java, Rust, and 50+ other languages',
            'Syntax highlighting and intelligent code completion',
            'Customizable themes and editor preferences',
            'Built-in terminal and file explorer'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/DoterEditor' }
          ]}
          delay={0.5}
          colorVariant="ocean"
        />

        <PortfolioItem
          id="encryption"
          title="Encryption Suite"
          year="2024"
          thumbnail="/images/works/thumb_encryption.png"
          technologies={['Java', 'Cryptography', 'SHA-256', 'KMAC']}
          description="A comprehensive Java cryptography suite implementing advanced encryption algorithms and file security features."
          features={[
            'Custom hashing library implementing SHA256, CSHAKE256, and KMACXOF256',
            'File encryption/decryption using DHIES encryption and Schnorr signatures',
            'Elliptic curve cryptography for enhanced security',
            'Based on NIST specifications for Keccak algorithm implementations'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/encryption-suite' },
            { label: 'NIST Documentation', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf' }
          ]}
          delay={0.6}
          colorVariant="rose"
        />

        <PortfolioItem
          id="hollowscape"
          title="Hollowscape"
          year="2022"
          thumbnail="/images/works/thumb_hollowscape.png"
          technologies={['JavaScript', 'Canvas API', 'Game Engine']}
          description="A vanilla JavaScript game engine designed for 2D game development."
          features={[
            'Pure JavaScript implementation with no dependencies',
            'Canvas-based rendering system',
            'Entity-component architecture for game objects',
            'Built-in physics and collision detection'
          ]}
          links={[
            { label: 'View Project', url: 'https://github.com/griffinryan/hollowscape' }
          ]}
          delay={0.7}
          colorVariant="sunset"
        />

        <PortfolioItem
          id="cgi"
          title="A CGI Study"
          year="2020"
          thumbnail="/images/works/thumb_cgi.png"
          technologies={['Linear Algebra', '3D Graphics', 'Mathematics']}
          description="An academic exploration of modern 3D rendering mathematics and computer-generated imagery fundamentals."
          features={[
            'Deep dive into transformation matrices and vector mathematics',
            'Implementation of rendering pipeline concepts',
            'Study of lighting models and shading techniques',
            'Exploration of texture mapping and rasterization'
          ]}
          links={[
            { label: 'View Study', url: 'https://github.com/griffinryan/cgi-study' }
          ]}
          delay={0.8}
          colorVariant="indigo"
        />

        <PortfolioItem
          id="dungeonadventure"
          title="Dungeon Adventure"
          year="2021"
          thumbnail="/images/works/thumb_dungeon.png"
          technologies={['Java', 'JavaFX', 'SQLite', 'JDK 13']}
          description="A roguelike dungeon crawler featuring procedural generation and persistent game state."
          features={[
            'Procedurally generated dungeon layouts for infinite replayability',
            'SQLite database for saving game progress and high scores',
            'JavaFX-based UI with smooth animations',
            'Turn-based combat system with various enemy types'
          ]}
          links={[
            { label: 'View Project', url: 'https://github.com/griffinryan/dungeon-adventure' }
          ]}
          delay={0.9}
          colorVariant="teal"
        />

        <PortfolioItem
          id="macdot"
          title="Macdot"
          year="2019"
          thumbnail="/images/works/thumb_macdot.png"
          technologies={['Bash', 'Shell', 'macOS', 'Arch Linux']}
          description="A dotfile management CLI tool for seamless system configuration across macOS and Arch Linux."
          features={[
            'Automated dotfile backup and restoration',
            'Cross-platform support for macOS and Arch Linux',
            'Version control integration for configuration tracking',
            'One-command system setup for new machines'
          ]}
          links={[
            { label: 'GitHub Repository', url: 'https://github.com/griffinryan/macdot' }
          ]}
          delay={1.0}
          colorVariant="amber"
        />

        <PortfolioItem
          id="torpoise"
          title="Torpoise"
          year="2016"
          thumbnail="/images/works/thumb_torpoise.png"
          technologies={['Music Production', 'Electronic', 'Audio Engineering']}
          description="Electronic music project showcasing experimental soundscapes and production techniques."
          features={[
            'Seattle-based electronic artist since 2013',
            'Focus on ambient and experimental electronic music',
            'Released multiple albums and EPs',
            'Live performance experience at various venues'
          ]}
          links={[
            { label: 'Listen on SoundCloud', url: 'https://soundcloud.com/torpoise' }
          ]}
          delay={1.1}
          colorVariant="coral"
        />

      </VStack>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
