import React from "react";
import { Navbar,Input, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Avatar} from "@nextui-org/react";
export default function App() {
  const [variant, setVariant] = React.useState("highlight");
  const [activeColor, setActiveColor] = React.useState("success");

  const {isDark} = useTheme()
  
  return (
      <Navbar isBordered={isDark} variant="">
        <Navbar.Brand>
          <img className="" src="goindia.png" width="50" alt="logo"></img>
          <Text b color="inherit" hideIn="xs" css={{marginLeft:"1rem"}}>
            Go India Advisors
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Input width="25vw" labelRight="🔍" type="search"></Input>
        </Navbar.Content>
        <Navbar.Content>
           <Navbar.Link color="inherit" href="#">
            Contact
          </Navbar.Link>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Avatar 
           src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
