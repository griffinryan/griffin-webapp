import styled from '@emotion/styled'

const ParagraphEnhanced = styled.p`
  text-align: justify;
  text-indent: 1.5em;
  hyphens: auto;
  font-family: 'Anton', 'Space Grotesk', sans-serif;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.5;
  transition: all 0.3s ease;
  
  &:hover {
    letter-spacing: -0.03em;
  }
`

export default ParagraphEnhanced