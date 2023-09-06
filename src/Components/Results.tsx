import React from "react";
import { Box, Text, Tag, Grid, GridItem } from "@chakra-ui/react";

export interface Result {
  videoThumbnail: string;
  queryHeading: string;
  tags: string[];
  video: string;
  heading: string;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <Grid
      pt={{ base: 36, sm: 20 }}
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={3}
    >
      {results.map((result, index) => (
        <GridItem key={index} p={4} border="1px solid #ccc" borderRadius="md">
          <video className={"video"} src={result.video} controls />

          <Text mt={2} fontWeight="bold">
            {result.heading}
          </Text>

          <Box mt={2}>
            {result.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex} mr={2} mb={2} colorScheme="teal">
                {tag}
              </Tag>
            ))}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Results;
