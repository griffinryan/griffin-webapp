import NextLink from 'next/link'
import OptimizedImage from './OptimizedImage'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <OptimizedImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        blurDataURL='L46@Zyt6vgInK%SJS5j[}us9WUs:'
        loading="lazy"
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <OptimizedImage
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        blurDataURL='L46@Zyt6vgInK%SJS5j[}us9WUs:'
        width={800}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
