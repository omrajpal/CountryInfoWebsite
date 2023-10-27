import React from 'react';
import axios from 'axios';
import InputComponent from './components/InputComponent';
import CountryInfoComponent from './components/CountryInfoComponent';
import LoadingComponent from './components/LoadingComponent';
import ErrorComponent from './components/ErrorComponent';
import { ChakraProvider, Box, Text, Flex, Heading, Icon } from "@chakra-ui/react";
import theme from './theme';
import { useSpring, animated } from '@react-spring/web';
import { FaGlobeAmericas } from 'react-icons/fa';

const App = () => {
  const [countryData, setCountryData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const fetchCountryData = async (countryName) => {
    try {
      setLoading(true);
      const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'; // Default to localhost if not set
      const response = await axios.get(`${backendURL}/api/country/${countryName}`);
      setCountryData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-br, background, secondary)" color="text" minHeight="100vh">
        <Flex direction="column" p={5} maxW="1200px" mx="auto">
          <Box mb={8}>
            <Flex alignItems="center">
              <Icon as={FaGlobeAmericas} w={8} h={8} color="primary" />
              <Heading ml={3} fontSize="2xl">Country Info Finder</Heading>
            </Flex>
          </Box>

          <animated.div style={fadeIn}>
            <Box p={5} shadow="xl" borderWidth="1px" borderRadius="md" bg="white" mb={5}>
              <InputComponent onSearch={fetchCountryData} />
            </Box>

            {loading && <LoadingComponent />}
            {error && <ErrorComponent errorMessage={error} />}
            {countryData && <CountryInfoComponent countryData={countryData} />}
          </animated.div>

          <Box mt={8} textAlign="center">
            <Text fontSize="sm">Powered by REST Countries API</Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default App;



