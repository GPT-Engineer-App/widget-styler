import { Container, Text, VStack, IconButton, Image, Box, Heading, Input, Button, HStack } from "@chakra-ui/react";
import { FaRocket, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Website
          </Heading>
          <Text fontSize="lg">Your journey to a better web experience starts here.</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTYzMzY5MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" borderRadius="md" boxShadow="md" />
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Sign Up
          </Heading>
          <VStack spacing={4}>
            <HStack width="100%">
              <Box flex="1">
                <Input placeholder="First Name" size="lg" />
              </Box>
              <Box flex="1">
                <Input placeholder="Last Name" size="lg" />
              </Box>
            </HStack>
            <Input placeholder="Email" size="lg" type="email" />
            <Input placeholder="Password" size="lg" type="password" />
            <Button colorScheme="teal" size="lg" width="100%">
              Sign Up
            </Button>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Text fontSize="md">
            Already have an account?{" "}
            <Button variant="link" colorScheme="teal">
              Log In
            </Button>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
