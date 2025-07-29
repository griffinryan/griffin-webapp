import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      fontFamily="'Bebas Neue', sans-serif"
      fontSize="xl"
      letterSpacing="0.05em"
      textTransform="uppercase"
      color={active ? 'coral.400' : 'cream'}
      textShadow={active ? '0 0 20px rgba(255, 107, 107, 0.6)' : '0 0 10px rgba(254, 243, 199, 0.3)'}
      position="relative"
      _hover={{
        color: 'sunset.400',
        textShadow: '0 0 30px rgba(251, 191, 36, 0.8)',
        transform: 'scale(1.1) rotate(-2deg)'
      }}
      transition="all 0.3s ease"
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="rgba(10, 25, 47, 0.85)"
      borderBottom="2px solid"
      borderColor="coral.400"
      css={{ backdropFilter: 'blur(15px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/griffinryan"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/portfolio">
                  Portfolio
                </MenuItem>
                <MenuItem as={MenuLink} href="/resume">
                  Resume
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/griffinryan/griffin-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
