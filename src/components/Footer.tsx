import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react'
import { GithubIcon } from '@/components/Icons'

const Footer = () => {
  return (
    <Box as='footer' mt={10} py={4} borderTopWidth='1px' borderTopColor={{ base: 'gray.300', _dark: 'gray.700' }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align='center'
        justify='space-between'
        maxW='container.xl'
        mx='auto'
      >
        <Flex align='center'>
          <Text color={{ base: 'gray.700', _dark: 'gray.300' }} mr={2}>
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
          <Text color={{ base: 'gray.700', _dark: 'gray.300' }} mx={2}>
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
            GitHub
          </Link>
        </Flex>
        <Text color={{ base: 'gray.700', _dark: 'gray.300' }} mt={{ base: 2, md: 0 }}>
          {new Date().getFullYear()}
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
