import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f5e6d3', '#0a192f')(props),
      color: mode('#4a5568', '#fef3c7')(props),
      minHeight: '100vh',
      position: 'relative',
      letterSpacing: '0.01em',
      lineHeight: '1.6',
      fontWeight: '400',
      fontVariantNumeric: 'tabular-nums'
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
    }
  })
}

const components = {
  Text: {
    baseStyle: {
      letterSpacing: '0.01em',
      lineHeight: '1.6'
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
  body: "'Space Grotesk', 'Barlow', -apple-system, sans-serif",
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
