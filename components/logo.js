import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {JSX} from "react";
import BorderedRainbowIcon from "./icons/borderedrainbow";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 20px;
  transform: rotate(-2deg);
  transition: all 0.3s ease;

  > svg {
    transition: 1s ease;
    filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.5));
  }

  &:hover {
    transform: rotate(-2deg) scale(1.05);
    
    > svg {
      transform: rotate(360deg);
      filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.8));
    }
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <BorderedRainbowIcon/>
        <Text
          color="#ff6b6b"
          fontFamily="'Permanent Marker', cursive"
          fontSize="2xl"
          letterSpacing="-0.02em"
          textTransform="uppercase"
          textShadow="0 0 20px rgba(255, 107, 107, 0.6)"
          ml={3}
          _hover={{
            color: '#fbbf24',
            textShadow: '0 0 30px rgba(251, 191, 36, 0.8)'
          }}
          transition="all 0.3s ease"
        >
          Griffin
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
