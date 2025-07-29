import { Container, Heading, VStack, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { PortfolioItem } from '../components/portfolio-item'

import thumbDoter from '/public/images/works/thumb_doter.png'
import thumbHollowscape from '/public/images/works/thumb_hollowscape.png'
import thumbCGI from '/public/images/works/thumb_cgi.png'
import thumbDungeon from '/public/images/works/thumb_dungeon.png'
import thumbEncryption from '/public/images/works/thumb_encryption.png'
import thumbMacdot from '/public/images/works/thumb_macdot.png'
import thumbTorpoise from '/public/images/works/thumb_torpoise.png'
import thumbGreenlightgo from '/public/images/works/thumb_greenlightgo.png'
import thumbDreamRequiem from '/public/images/works/thumb_dreamrequiem.png'

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
          id="dreamrequiem"
          title="Dream Requiem"
          year="2024"
          thumbnail={thumbDreamRequiem}
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
          delay={0.1}
        />

        <PortfolioItem
          id="greenlightgo"
          title="GreenLightGo"
          year="2024"
          thumbnail={thumbGreenlightgo}
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
          delay={0.2}
        />

        <PortfolioItem
          id="doter"
          title="Doter Editor"
          year="2024"
          thumbnail={thumbDoter}
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
          delay={0.3}
        />

        <PortfolioItem
          id="encryption"
          title="Encryption Suite"
          year="2024"
          thumbnail={thumbEncryption}
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
          delay={0.4}
        />

        <PortfolioItem
          id="hollowscape"
          title="Hollowscape"
          year="2022"
          thumbnail={thumbHollowscape}
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
          delay={0.5}
        />

        <PortfolioItem
          id="cgi"
          title="A CGI Study"
          year="2020"
          thumbnail={thumbCGI}
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
          delay={0.6}
        />

        <PortfolioItem
          id="dungeonadventure"
          title="Dungeon Adventure"
          year="2021"
          thumbnail={thumbDungeon}
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
          delay={0.7}
        />

        <PortfolioItem
          id="macdot"
          title="Macdot"
          year="2019"
          thumbnail={thumbMacdot}
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
          delay={0.8}
        />

        <PortfolioItem
          id="torpoise"
          title="Torpoise"
          year="2016"
          thumbnail={thumbTorpoise}
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
          delay={0.9}
        />
      </VStack>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
