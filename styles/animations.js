import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

// Cosine wiggle animation from Lakehouse
export const cosineWiggle = keyframes`
  0% { 
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% { 
    transform: translateY(-12px) translateX(8px) rotate(2deg);
  }
  50% { 
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  75% { 
    transform: translateY(12px) translateX(-8px) rotate(-2deg);
  }
  100% { 
    transform: translateY(0) translateX(0) rotate(0deg);
  }
`

// Letter dance animation for individual letters
export const letterDance = keyframes`
  0%, 100% { 
    transform: translateY(0) rotate(var(--rotation, 0deg)); 
  }
  50% { 
    transform: translateY(-5px) rotate(calc(var(--rotation, 0deg) * -1)); 
  }
`

// Lazy rotate animation
export const lazyRotate = keyframes`
  0% { 
    transform: rotate(0deg) scale(1); 
  }
  25% { 
    transform: rotate(15deg) scale(1.15); 
  }
  50% { 
    transform: rotate(0deg) scale(1.2); 
  }
  75% { 
    transform: rotate(-15deg) scale(1.15); 
  }
  100% { 
    transform: rotate(0deg) scale(1); 
  }
`

// Styled component for wiggling heading
export const WigglyHeading = styled.h3`
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${cosineWiggle} 1.5s ease-in-out infinite;
    transform: scale(1.05);
    z-index: 10;
  }
  
  /* Accessibility - reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      animation: none;
      transform: scale(1.02);
    }
  }
`

// Styled component for animated text with letter effects
export const AnimatedText = styled.span`
  display: inline-block;
  
  .letter {
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      animation: ${lazyRotate} 2s ease-in-out infinite;
      color: ${props => props.hoverColor || '#ff63c3'};
    }
  }
  
  &:hover .letter {
    animation: ${letterDance} 0.5s ease-in-out infinite;
    animation-delay: calc(var(--index) * 0.05s);
  }
`