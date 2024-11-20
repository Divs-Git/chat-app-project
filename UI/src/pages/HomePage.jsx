import React from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <React.Fragment>
      <Container maxW="xl" centerContent>
        <Box
          d={"flex"}
          justifyContent={"center"}
          p={3}
          bg={"white"}
          width={"100%"}
          m={"40px 0 15px 0"}
          borderRadius={"lg"}
          border={"1px solid gray"}
        >
          <Text
            fontSize={"4xl"}
            fontFamily={"Work Sans"}
            color={"black"}
            textAlign={"center"}
            letterSpacing={"wide"}
            textTransform={"uppercase"}
          >
            Live-Talk
          </Text>
        </Box>
        <Box bg={"white"} w={"100%"} p={4} borderRadius={"lg"}>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
