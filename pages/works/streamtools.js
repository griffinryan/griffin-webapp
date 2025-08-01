import { Container, Box } from "@chakra-ui/react"
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
    <Layout title="StreamTools">
        <Container>
            <WorkTitle badges={['2025', 'TypeScript', 'Computer Vision']}>
                StreamTools
            </WorkTitle>
            
            <WorkSection title="Overview" delay={0.3}>
                <WorkDescription>
                    StreamTools is a cutting-edge browser-based ASL (American Sign Language) recognition 
                    system built with a sophisticated clean architecture framework. Designed for real-time 
                    hand tracking and sign language detection, it leverages MediaPipe and TensorFlow.js to 
                    bring computer vision capabilities directly to the web browser. The project features 
                    a modular, event-driven architecture that makes it easy to extend and integrate with 
                    other systems, including speech synthesis pipelines for ASL-to-speech conversion.
                </WorkDescription>
            </WorkSection>

            <OptimizedImage src="/images/works/thumb_streamtools.png" alt="StreamTools ASL Recognition" width={1280} height={720} priority sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '0.375rem', marginBottom: '1rem' }} />

            <WorkSection title="Demo Video" delay={0.35}>
                <Box 
                    as="video" 
                    controls 
                    width="100%" 
                    borderRadius="0.375rem" 
                    mb={4}
                    src="/images/works/video_streamtools.mov"
                    style={{ maxWidth: '100%', height: 'auto' }}
                >
                    Your browser does not support the video tag.
                </Box>
            </WorkSection>

            <WorkSection title="Core Features" delay={0.4}>
                <FeatureList features={[
                    'Real-time hand tracking with 21 3D landmarks per hand using MediaPipe',
                    'Clean architecture framework with separation of concerns',
                    'Type-safe event bus for loose coupling between components',
                    'Multiple rendering modes: Simple skeleton, advanced with animations',
                    'Extensible plugin architecture for custom processors and renderers',
                    'Performance monitoring with adaptive quality settings',
                    'Frame buffer with sliding window analysis for temporal recognition',
                    'Console output integration for CSM speech synthesis pipeline'
                ]} />
            </WorkSection>

            <WorkSection title="Framework Architecture" delay={0.5}>
                <WorkDescription>
                    StreamTools implements clean architecture principles with a sophisticated TypeScript 
                    framework. The system is organized into distinct layers: Core utilities manage the 
                    recognition pipeline and canvas operations, Processing components handle frame analysis 
                    with MediaPipe integration, Rendering system provides pluggable visualization options, 
                    Events enable type-safe communication between components, Configuration offers centralized 
                    reactive settings management, and Monitoring tracks performance metrics in real-time. 
                    This architecture ensures maintainability, testability, and extensibility.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Technical Innovation" delay={0.6}>
                <WorkDescription>
                    The project showcases several technical innovations including a dual API strategy 
                    with both legacy support and modern framework implementation, sophisticated frame 
                    processing with circular buffers for temporal analysis, WebGL-accelerated rendering 
                    with custom shaders for visual effects, adaptive performance optimization based on 
                    device capabilities, and a factory pattern for runtime component selection. The 
                    event-driven design allows components to communicate without tight coupling, making 
                    the system highly modular and easy to extend with new capabilities.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Component System" delay={0.7}>
                <FeatureList features={[
                    'RecognitionPipeline: Orchestrates the entire processing flow',
                    'HandTrackingProcessor: MediaPipe integration with landmark normalization',
                    'FrameBuffer: Circular buffer for sliding window temporal analysis',
                    'EventBus: Type-safe global event system with utilities',
                    'ConfigurationManager: Centralized reactive configuration',
                    'PerformanceMonitor: Real-time FPS and latency tracking',
                    'RendererFactory: Dynamic renderer creation with registration',
                    'BaseFrameProcessor: Abstract base for custom processing extensions'
                ]} />
            </WorkSection>

            <WorkSection title="Interactive Demo" delay={0.8}>
                <WorkDescription>
                    The StreamTools demo provides a live visualization of the hand tracking system in 
                    action. Users can enable their webcam to see real-time hand skeleton rendering with 
                    smooth animations and visual effects. The demo includes performance metrics display, 
                    theme switching between dark and light modes, and console output showing detected 
                    signs in a format ready for integration with speech synthesis systems. The responsive 
                    design works across desktop and mobile devices, automatically adjusting quality 
                    settings based on available computational resources.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Future Development" delay={0.9}>
                <WorkDescription>
                    StreamTools is designed as a foundation for advanced ASL recognition capabilities. 
                    Future development includes transformer model integration for accurate sign classification, 
                    WLASL dataset training for comprehensive vocabulary support, continuous recognition 
                    for sign sequences and sentences, FastAPI backend for scalable processing, WebAssembly 
                    optimization for improved inference speed, and integration with CSM (Conversational 
                    Speech Model) for real-time ASL-to-speech conversion. The clean architecture ensures 
                    these enhancements can be added without disrupting existing functionality.
                </WorkDescription>
            </WorkSection>

            <WorkSection title="Technology Stack" delay={1.0}>
                <TechStack technologies={[
                    'TypeScript',
                    'MediaPipe Tasks Vision',
                    'TensorFlow.js',
                    'WebGL/Canvas API',
                    'esbuild',
                    'Event-Driven Architecture',
                    'Clean Architecture',
                    'Factory Pattern'
                ]} />
            </WorkSection>

            <WorkSection title="Resources & Links" delay={1.1}>
                <ProjectLinks links={[
                    { label: 'GitHub Repository', url: 'https://github.com/griffinryan/streamtools' },
                    { label: 'MediaPipe Documentation', url: 'https://developers.google.com/mediapipe' },
                    { label: 'TensorFlow.js Guide', url: 'https://www.tensorflow.org/js' },
                    { label: 'Live Demo', url: 'http://localhost:8080/demo/' }
                ]} />
            </WorkSection>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'