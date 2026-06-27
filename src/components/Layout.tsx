import { type FC } from 'react'
import { Container, Flex, Heading, Button } from '@chakra-ui/react'
import { ColorModeButton } from '@/components/ui/color-mode'
import Footer from '@/components/Footer'

interface Props {
  children: React.ReactNode
  onLoadNewPlants?: () => Promise<void>
  loading?: boolean
}

const Layout: FC<Props> = ({ children, onLoadNewPlants, loading }) => {
  return (
    <Container maxW='container.xl' pt={8} pb={4}>
      <Flex justifyContent='space-between' alignItems='center' mb={8}>
        <Heading as='h1' size='4xl' textAlign='center' color={{ base: 'black', _dark: 'white' }}>
          Flora Explorer
        </Heading>
        <ColorModeButton />
      </Flex>
      <Flex justifyContent='center' mb={8}>
        <Button
          size='lg'
          onClick={onLoadNewPlants}
          loading={loading}
          disabled={loading}
          bg={{ base: 'gray.800', _dark: 'gray.100' }}
          color={{ base: 'white', _dark: 'gray.900' }}
          _hover={{
            bg: { base: 'gray.900', _dark: 'gray.200' }
          }}
        >
          View New Plants
        </Button>
      </Flex>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
