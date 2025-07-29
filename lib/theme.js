import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode(
        'linear-gradient(135deg, #0a192f 0%, #172a45 50%, #2a4365 100%)',
        'linear-gradient(135deg, #0a192f 0%, #172a45 50%, #2a4365 100%)'
      )(props),
      color: '#fef3c7',
      minHeight: '100vh',
      position: 'relative'
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
  body: "'M PLUS Rounded 1c', sans-serif",
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
  textSecondary: 'rgba(254, 243, 199, 0.8)'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
