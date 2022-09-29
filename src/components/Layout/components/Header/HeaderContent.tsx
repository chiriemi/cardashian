import { ActionIcon, Paper, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { LightDarkButton } from "./LightDarkButton";

export const HeaderContent = () => {
  return (
    <div
      className="header-content"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "-webkit-fill-available",
        paddingLeft: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <ActionIcon p="xl" radius="xl" component={Link} to="/">
          <img src="data:image/png;base64,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"></img>
        </ActionIcon>
        <Text
          component={Link}
          to="/"
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={800}
          style={{
            fontFamily: "Greycliff CF, sans-serif",
            paddingLeft: 10,
            fontSize: 24,
          }}
        >
          CarDashian
        </Text>
      </div>
      <LightDarkButton />
    </div>
  );
};
