import React from "react";
import { Box, Container, Text, Tabs } from "@chakra-ui/react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

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
        <Box bg={"white"} w={"100%"} p={4} borderRadius={"lg"} color={"black"}>
          <Tabs.Root
            defaultValue="login"
            variant="plain"
            mb={"1"}
            maxW="md"
            m={"0 auto"}
            fitted
          >
            <Tabs.List rounded="l2" p="1">
              <Tabs.Trigger
                value="login"
                _selected={{ color: "green.950", bg: "green.300" }}
              >
                Login
              </Tabs.Trigger>
              <Tabs.Trigger
                value="signup"
                _selected={{ color: "green.950", bg: "green.300" }}
              >
                Sign Up
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="login">
              <Login />
            </Tabs.Content>
            <Tabs.Content value="signup">
              <Signup />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
