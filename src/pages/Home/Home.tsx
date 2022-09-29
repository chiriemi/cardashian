import { Button, Center, Group, Paper, Text, Transition } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { NavLink as MantineNavLink } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconHome2 } from "@tabler/icons";

export const Home = () => {
  return (
    <Center>
      <Paper>
        <Text
          align="center"
          variant="gradient"
          gradient={{ from: "cyan", to: "indigo", deg: 90 }}
          weight={800}
          size={50}
        >
          Welcome to CarDashian
        </Text>

        <Text
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={500}
          lineClamp={6}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus dolore expedita mollitia
          sint ad fugiat. Eligendi, aspernatur impedit sequi deserunt fugit
          animi ducimus quasi distinctio maiores odit tempore, aliquid neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque.
        </Text>
        <Text
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={500}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus dolore expedita mollitia
          sint ad fugiat. Eligendi, aspernatur impedit sequi deserunt fugit
          animi ducimus quasi distinctio maiores odit tempore, aliquid neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque.
        </Text>
        <Text
          align="center"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={500}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Delectus dolore expedita mollitia
          sint ad fugiat. Eligendi, aspernatur impedit sequi deserunt fugit
          animi ducimus quasi distinctio maiores odit tempore, aliquid neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolore expedita mollitia sint ad fugiat. Eligendi, aspernatur impedit
          sequi deserunt fugit animi ducimus quasi distinctio maiores odit
          tempore, aliquid neque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus dolore expedita mollitia sint ad fugiat.
          Eligendi, aspernatur impedit sequi deserunt fugit animi ducimus quasi
          distinctio maiores odit tempore, aliquid neque.
        </Text>
        <Group position="center" pt="lg" pb="lg">
          <Text color="blue" size="xl">
            Make yourself a{" "}
            {
              <Button
                component={Link}
                to="/schedule"
                color="cyan"
                variant="outline"
                radius="xl"
              >
                Service
              </Button>
            }{" "}
            appointment for your car or visit our{" "}
            {
              <Button
                component={Link}
                to="/shop"
                color="cyan"
                variant="outline"
                radius="xl"
              >
                Shop
              </Button>
            }
          </Text>
        </Group>
      </Paper>
    </Center>
  );
};
