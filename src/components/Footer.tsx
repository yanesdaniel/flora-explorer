import { type FC } from 'react'
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react'
import { GithubIcon } from '@components/Icons'

const Footer: FC = () => {
  return (
    <Box as='footer' mt={10} py={6} borderTopWidth='1px' borderTopColor={{ base: 'gray.200', _dark: 'gray.700' }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify='space-between'
        maxW='container.xl'
        mx='auto'
        px={4}
      >
        <Text color={{ base: 'gray.600', _dark: 'gray.300' }} mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} Daniel Yanes - MIT License
        </Text>
        <Flex align='center'>
          <Text color={{ base: 'gray.600', _dark: 'gray.300' }} mr={2}>
            Created by
          </Text>
          <Link
            href='https://github.com/DanielYanesDev'
            target='_blank'
            rel='noopener noreferrer'
            color='teal.500'
            _hover={{ textDecoration: 'none', color: 'teal.400' }}
            display='inline-flex'
            alignItems='center'
          >
            <Icon as={GithubIcon} mr={1} />
            Daniel Yanes
          </Link>
          <Text color={{ base: 'gray.600', _dark: 'gray.300' }} mx={2}>
            |
          </Text>
          <Link
            href='https://github.com/DanielYanesDev/react-plants-view'
            target='_blank'
            rel='noopener noreferrer'
            color='teal.500'
            _hover={{ textDecoration: 'none', color: 'teal.400' }}
            display='inline-flex'
            alignItems='center'
          >
            <Icon as={GithubIcon} mr={1} />
            View on GitHub
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
