import React, { useState, useEffect } from "react";
import { Input, Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const Header = ({ setResults }: { setResults: CallableFunction }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${
            query.length > 0 ? query : "metube"
          }&numResults=20`
        );
        setResults(response.data.results);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query, setResults]);

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" p={4} pr={10}>
        <Text
          fontFamily={"mono"}
          fontSize={"2xl"}
          fontWeight={"black"}
          border={"2px solid white"}
          borderBottomColor={"red.500"}
          display={"flex"}
        >
          Me
          <section style={{ color: "red" }}>Tube</section>
        </Text>
        <Box display={{ base: "none", sm: "block" }}>
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>

        <Image
          src={
            "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg?w=2000"
          }
          alt="Profile"
          borderRadius="full"
          boxSize="40px"
        />
      </Flex>
      <Box
        display={{ base: "flex", sm: "none" }}
        justifyContent={"center"}
        p={20}
        pb={5}
        pt={1}
      >
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Header;
