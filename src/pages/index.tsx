import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Container } from '../components/Container'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <h1>
    aluna static homepage
    </h1>

    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
)

export default Index
