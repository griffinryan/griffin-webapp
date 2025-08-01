import { Container, Link } from "@chakra-ui/react"
import Layout from '../../components/layouts/article'
import { 
  WorkTitle, 
  WorkHero, 
  WorkSection, 
  WorkDescription,
  FeatureList,
  TechStack,
  ProjectLinks 
} from '../../components/work-enhanced'

import OptimizedImage from '../../components/OptimizedImage'
const Work = () => (
    <Layout title="Encryption Suite">
        <Container>
            <WorkTitle badges={['2024', 'Cryptography', 'Security']}>
                Encryption Suite
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    Encryption Suite is a comprehensive Java cryptography library designed to handle 
                    advanced encryption, decryption, file signing, and verification operations. 
                    Featuring a custom hashing library that implements SHA-256, CSHAKE-256, and 
                    KMACXOF-256 algorithms, it provides robust security solutions for modern applications. 
                    The suite leverages DHIES encryption and Schnorr signatures with elliptic curves 
                    for state-of-the-art cryptographic operations.
                </WorkDescription>
            </WorkSection>

            <OptimizedImage src="/images/works/thumb_encryption.png" alt="Encryption Suite Interface" width={1280} height={720} priority sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '0.375rem', marginBottom: '1rem' }} />

            <WorkSection title="Cryptographic Features" delay={0.4}>
                <FeatureList features={[
                    'Custom implementation of SHA-256, CSHAKE-256, and KMACXOF-256 hashing algorithms',
                    'File encryption and decryption using DHIES (Diffie-Hellman Integrated Encryption Scheme)',
                    'Digital signatures using Schnorr signatures with elliptic curve cryptography',
                    'Secure file signing and verification for data integrity',
                    'Support for both text and binary file encryption',
                    'Key generation and management utilities',
                    'Unique salting mechanisms for enhanced security',
                    'Command-line interface for easy integration'
                ]} />
            </WorkSection>

            <WorkSection title="Technical Foundation" delay={0.5}>
                <WorkDescription>
                    All cryptographic implementations are based on the National Institute of 
                    Standards and Technology (NIST) specifications for the Keccak algorithm 
                    and its derived hashing functions. The suite adheres to industry standards 
                    for security and performance, ensuring reliable protection for sensitive data. 
                    Learn more about SHA-3 derived functions like cSHAKE and KMAC from the{' '}
                    <Link 
                        href='https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf' 
                        target='_blank'
                        color="sunset.400"
                        _hover={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.6)' }}
                    >
                        NIST Special Publication archive
                    </Link>.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Implementation Details" delay={0.6}>
                <TechStack technologies={[
                    'Java',
                    'SHA-256',
                    'CSHAKE-256', 
                    'KMACXOF-256',
                    'Elliptic Curves',
                    'DHIES',
                    'Schnorr Signatures',
                    'Keccak Algorithm'
                ]} />
            </WorkSection>

            <WorkSection title="Resources & Documentation" delay={0.7}>
                <ProjectLinks links={[
                    { label: 'GitHub Repository', url: 'https://github.com/griffinryan/encryption-suite' },
                    { label: 'NIST Cryptographic Standards', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-185.pdf' },
                    { label: 'API Documentation', url: 'https://github.com/griffinryan/encryption-suite/wiki' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
