'use client'
import { ReactNode } from 'react';
import {
  Box,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Center,
  Container,
  Text,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: 'blur(6px)' }}
        zIndex={2}
      //{...props}
      >
        <Container
          p={'2'}
          maxW={"container.md"}>
          <Flex>
            <Text fontSize={'3xl'}>Mischa Strauss</Text>
            <Spacer />
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
