import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { HeaderContent } from "./components/Header/HeaderContent";

export const Layout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[3],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
          // onClick={() => setOpened((o) => !o)}
        >
          <Navigation />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          <Text align="center"> @ App done for Fortech React Training</Text>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xs"
              />
            </MediaQuery>

            <HeaderContent />
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};
