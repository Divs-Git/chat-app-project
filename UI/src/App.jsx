import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Box className="App light">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </Box>
    </React.Fragment>
  );
}

export default App;
