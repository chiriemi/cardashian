import { NavLink as MantineNavLink } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconCar,
  IconClock2,
  IconEngine,
  IconHome2,
  IconInfoCircle,
  IconShoppingCart,
} from "@tabler/icons";

export const Navigation = () => {
  const location = useLocation();
  return (
    <div>
      <MantineNavLink
        label="Home"
        component={Link}
        to="/"
        active={location.pathname === "/"}
        color="green"
        variant="filled"
        p="md"
        icon={<IconHome2 />}
      />
      <MantineNavLink
        label="Schedule a service"
        component={Link}
        to="/schedule"
        active={location.pathname === "/schedule"}
        color="green"
        variant="filled"
        p="md"
        icon={<IconClock2 />}
      />
      <MantineNavLink
        label="Shop"
        component={Link}
        to="/shop"
        active={location.pathname === "/shop"}
        color="green"
        variant="filled"
        p="md"
        description={"Buy cars or parts"}
        icon={<IconShoppingCart />}
      >
        <MantineNavLink
          label="Cars"
          component={Link}
          to="/shop/cars"
          active={location.pathname === "/shop/cars"}
          color="green"
          variant="filled"
          p="md"
          icon={<IconCar size="24" />}
        />
        <MantineNavLink
          label="Parts"
          component={Link}
          to="/shop/parts"
          active={location.pathname === "/shop/parts"}
          color="green"
          variant="filled"
          p="md"
          icon={<IconEngine size="24" />}
        />
      </MantineNavLink>
      <MantineNavLink
        label="About"
        component={Link}
        to="/about"
        active={location.pathname === "/about"}
        color="green"
        variant="filled"
        p="md"
        icon={<IconInfoCircle />}
      />
    </div>
  );
};
