import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Divider, Link, Container } from "@chakra-ui/react";
import { FaImdb, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between">
            <Heading as="h1" size="xl">
              Tom Hanks
            </Heading>
            <HStack spacing={4}>
              <Link href="https://www.imdb.com/name/nm0000158/" isExternal>
                <FaImdb size={24} />
              </Link>
              <Link href="https://twitter.com/tomhanks" isExternal>
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/tomhanks/" isExternal>
                <FaInstagram size={24} />
              </Link>
            </HStack>
          </HStack>
          <HStack spacing={8} align="start">
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b20lMjBoYW5rcyUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tom Hanks" borderRadius="full" boxSize="200px" />
            <VStack align="start" spacing={4}>
              <Heading as="h2" size="lg">
                About Me
              </Heading>
              <Text>I'm an American actor and filmmaker. Known for both my comedic and dramatic roles, I'm one of the most popular and recognizable film stars worldwide, and I'm regarded as an American cultural icon.</Text>
            </VStack>
          </HStack>
          <Divider />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Notable Films
            </Heading>
            <Text>
              - Forrest Gump (1994)
              <br />
              - Cast Away (2000)
              <br />
              - Saving Private Ryan (1998)
              <br />
              - Big (1988)
              <br />
              - Philadelphia (1993)
              <br />- Toy Story (1995)
            </Text>
          </VStack>
          <Divider />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="lg">
              Awards
            </Heading>
            <Text>
              - Academy Award for Best Actor (Forrest Gump, 1994)
              <br />
              - Academy Award for Best Actor (Philadelphia, 1993)
              <br />
              - Presidential Medal of Freedom (2016)
              <br />
              - Kennedy Center Honors Medallion (2014)
              <br />- French Legion of Honor (2016)
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
