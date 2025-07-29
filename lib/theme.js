import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f5e6d3', '#0a192f')(props),
      color: mode('#4a5568', '#fef3c7')(props),
      minHeight: '100vh',
      position: 'relative',
      letterSpacing: '-0.02em',
      lineHeight: '1.5',
      fontWeight: '500',
      fontVariantNumeric: 'tabular-nums',
      fontVariantLigatures: 'common-ligatures',
      fontFeatureSettings: '"kern" 1, "liga" 1',
      '--poster-compression': '-0.04em',
      '--poster-rotation': '2deg',
      '--poster-scale': '1.1',
      '--poster-font-primary': "'Anton', sans-serif",
      '--poster-font-accent': "'Bebas Neue', sans-serif",
      '--poster-font-artistic': "'Permanent Marker', cursive",
      '--poster-font-bold': "'Black Ops One', sans-serif"
    },
    '*': {
      textShadow: mode('none', '0 0 20px rgba(254, 243, 199, 0.1)')(props)
    },
    '@keyframes spin': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    },
    '@keyframes cosineWiggle': {
      '0%': { 
        transform: 'translateY(0) translateX(0) rotate(0deg)'
      },
      '25%': { 
        transform: 'translateY(-12px) translateX(8px) rotate(2deg)'
      },
      '50%': { 
        transform: 'translateY(0) translateX(0) rotate(0deg)'
      },
      '75%': { 
        transform: 'translateY(12px) translateX(-8px) rotate(-2deg)'
      },
      '100%': { 
        transform: 'translateY(0) translateX(0) rotate(0deg)'
      }
    },
    '@keyframes letterDance': {
      '0%, 100%': { transform: 'translateY(0) rotate(var(--rotation))' },
      '50%': { transform: 'translateY(-5px) rotate(calc(var(--rotation) * -1))' }
    },
    '@keyframes lazyRotate': {
      '0%': { 
        transform: 'rotate(0deg) scale(1)'
      },
      '25%': { 
        transform: 'rotate(15deg) scale(1.15)'
      },
      '50%': { 
        transform: 'rotate(0deg) scale(1.2)'
      },
      '75%': { 
        transform: 'rotate(-15deg) scale(1.15)'
      },
      '100%': { 
        transform: 'rotate(0deg) scale(1)'
      }
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    '@keyframes pulse': {
      '0%, 100%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.95
      }
    },
    '@keyframes posterWiggle': {
      '0%, 100%': { 
        transform: 'translateX(0) rotate(0deg) scale(1)'
      },
      '25%': { 
        transform: 'translateX(-2px) rotate(-1deg) scale(1.02)'
      },
      '50%': { 
        transform: 'translateX(1px) rotate(1deg) scale(1.01)'
      },
      '75%': { 
        transform: 'translateX(-1px) rotate(-0.5deg) scale(1.02)'
      }
    },
    '@keyframes posterGlow': {
      '0%, 100%': { 
        textShadow: '0 0 20px rgba(255, 107, 107, 0.3)',
        filter: 'brightness(1)'
      },
      '50%': { 
        textShadow: '0 0 40px rgba(255, 107, 107, 0.6), 0 0 60px rgba(255, 107, 107, 0.3)',
        filter: 'brightness(1.1)'
      }
    },
    '@keyframes posterCompress': {
      '0%': { 
        letterSpacing: 'var(--poster-compression, -0.02em)',
        transform: 'scaleX(1)'
      },
      '50%': { 
        letterSpacing: 'calc(var(--poster-compression, -0.02em) - 0.02em)',
        transform: 'scaleX(0.98)'
      },
      '100%': { 
        letterSpacing: 'var(--poster-compression, -0.02em)',
        transform: 'scaleX(1)'
      }
    },
    '@keyframes posterBounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0) rotate(var(--rotation, 0deg))'
      },
      '40%': {
        transform: 'translateY(-8px) rotate(calc(var(--rotation, 0deg) + 2deg))'
      },
      '60%': {
        transform: 'translateY(-4px) rotate(calc(var(--rotation, 0deg) - 2deg))'
      }
    },
    '.poster-text-hover': {
      transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      cursor: 'pointer',
      transformOrigin: 'center',
      backfaceVisibility: 'hidden',
      transform: 'translateZ(0)', // GPU acceleration
      willChange: 'transform, filter',
      '&:hover': {
        animation: 'posterWiggle 0.5s ease-in-out',
        filter: 'brightness(1.2) contrast(1.1)',
        zIndex: 10
      }
    },
    '.poster-emphasis': {
      display: 'inline-block',
      animation: 'posterGlow 3s ease-in-out infinite',
      '&:hover': {
        animation: 'posterBounce 0.6s ease-out'
      }
    },
    '.poster-compress': {
      display: 'inline-block',
      animation: 'posterCompress 8s ease-in-out infinite',
      transformOrigin: 'left center'
    }
  })
}

const components = {
  Text: {
    baseStyle: {
      letterSpacing: '-0.02em',
      lineHeight: '1.4',
      fontWeight: '500',
      textTransform: 'none',
      fontFeatureSettings: '"kern" 1',
      transition: 'all 0.3s ease',
      '&:hover': {
        letterSpacing: '-0.03em',
        transform: 'translateZ(0)'
      }
    },
    variants: {
      'poster-body': {
        fontFamily: "'Anton', sans-serif",
        letterSpacing: '-0.04em',
        textTransform: 'uppercase',
        fontWeight: '400'
      },
      'poster-accent': {
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: '-0.03em',
        fontSize: '1.1em'
      },
      'poster-artistic': {
        fontFamily: "'Permanent Marker', cursive",
        letterSpacing: '0.02em',
        transform: 'rotate(-2deg)',
        display: 'inline-block'
      }
    }
  },
  Heading: {
    baseStyle: {
      fontFamily: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      textShadow: '0 0 30px rgba(255, 107, 107, 0.3)'
    },
    variants: {
      'section-title': {
        fontFamily: "'Black Ops One', sans-serif",
        fontSize: 32,
        color: 'coral.400',
        textDecoration: 'none',
        textTransform: 'uppercase',
        marginTop: 6,
        marginBottom: 6,
        textShadow: '0 0 40px rgba(255, 107, 107, 0.5), 0 0 80px rgba(255, 107, 107, 0.3)'
      },
      'poster-hero': {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: { base: '4rem', md: '6rem', lg: '8rem' },
        lineHeight: 0.9,
        color: 'coral.400'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('sunset.500', 'sunset.400')(props),
      textUnderlineOffset: 3,
      fontWeight: '500',
      letterSpacing: '0.01em',
      transition: 'all 0.3s ease',
      _hover: {
        textShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
        color: mode('sunset.600', 'sunset.300')(props)
      }
    })
  },
  Button: {
    baseStyle: {
      fontFamily: "'Anton', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      transition: 'all 0.3s ease'
    },
    variants: {
      poster: {
        bg: 'coral.500',
        color: 'cream',
        _hover: {
          bg: 'coral.600',
          transform: 'scale(1.05)',
          textShadow: '0 0 30px rgba(255, 107, 107, 0.8)'
        }
      }
    }
  }
}

const fonts = {
  heading: "'Bebas Neue', sans-serif",
  body: "'Anton', 'Space Grotesk', 'Bebas Neue', -apple-system, sans-serif",
  poster: {
    hero: "'Bebas Neue', sans-serif",
    accent: "'Anton', sans-serif",
    artistic: "'Permanent Marker', cursive",
    bold: "'Black Ops One', sans-serif"
  }
}

const colors = {
  lake: {
    deep: '#0a192f',
    mid: '#172a45',
    light: '#2a4365'
  },
  coral: {
    300: '#ff9999',
    400: '#ff6b6b',
    500: '#ff4757',
    600: '#ee5a6f'
  },
  sunset: {
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706'
  },
  cream: '#fef3c7',
  textSecondary: 'rgba(254, 243, 199, 0.8)',
  // Light mode colors
  beige: {
    light: '#f5e6d3',
    mid: '#e8d5c4',
    deep: '#dbc7b5'
  },
  pink: {
    300: '#ffb3d9',
    400: '#ff69b4',
    500: '#ff1493',
    600: '#db1876'
  },
  purple: {
    300: '#e6b3e6',
    400: '#da70d6',
    500: '#ba55d3',
    600: '#9932cc'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
