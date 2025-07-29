import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import {JSX} from "react";
import BorderedRainbowIcon from "./icons/borderedrainbow";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  transition: all 0.3s ease;

  > svg {
    transition: 1s ease;
  }

  &:hover > svg {
    transform: rotate(270deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <BorderedRainbowIcon/>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Griffin Ryan
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
