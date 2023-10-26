import React from 'react';
import { Box, Heading, Text, Badge, Image, Flex, Spacer, Stack } from "@chakra-ui/react";

const CountryInfoComponent = ({ countryData }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white" color="text">
      <Flex>
        <Box flexShrink={0}>
          <Image 
            borderRadius="lg"
            width={{ base: "44", md: "60" }}
            src={countryData.flags[0]} // Assuming the API provides a flags array with SVG or PNG
            alt={countryData.name.official}
            objectFit="cover"
          />
        </Box>
        <Box ml={4}>
          <Heading fontSize="2xl" mb={4}>{countryData.name.official}</Heading>
          <Text mb={2}>
            <Badge colorScheme="green" mr={2}>Capital</Badge>
            {countryData.capital}
          </Text>
          <Text mb={2}>
            <Badge colorScheme="blue" mr={2}>Population</Badge>
            {countryData.population.toLocaleString()}
          </Text>
          <Text mb={2}>
            <Badge colorScheme="purple" mr={2}>Region</Badge>
            {countryData.region}
          </Text>
          <Text mb={2}>
            <Badge colorScheme="red" mr={2}>Subregion</Badge>
            {countryData.subregion}
          </Text>
          <Stack direction="row" spacing={2} mt={4}>
            {countryData.languages && Object.values(countryData.languages).map((lang) => (
              <Badge key={lang} colorScheme="teal">{lang}</Badge>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CountryInfoComponent;
