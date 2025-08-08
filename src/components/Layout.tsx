import { type FC } from 'react'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import { ColorModeButton } from '@components/ui/color-mode'
import Footer from '@components/Footer'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container maxW='container.xl' pt={8} pb={4}>
      <Flex justifyContent='space-between' alignItems='center' mb={8}>
        <Heading as='h1' size='4xl' textAlign='center' color={{ base: 'black', _dark: 'white' }}>
          Plants View
        </Heading>
        <ColorModeButton />
      </Flex>
      <Text fontSize='xl' color={{ base: 'gray.700', _dark: 'gray.200' }} my={8} textAlign='center'>
        Refresh page to view new plants
      </Text>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
