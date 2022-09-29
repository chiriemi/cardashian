import {
  Modal,
  Group,
  Button,
  Grid,
  Text,
  Loader,
  Center,
} from "@mantine/core";
import React, { useState } from "react";
import { useCarsQuery } from "../../../../../hooks/CarsHooks/useCarsQuery";
import { CarDetails } from "./CarDetails";
import { AddCar } from "./components/AddCar";

export const Cars = () => {
  const [opened, setOpened] = useState(false);
  const { isLoading, isError, data: cars } = useCarsQuery();

  if (isLoading) {
    return (
      <Center pt={200}>
        <Loader color="violet" size={100} variant="bars" />
      </Center>
    );
  }

  if (isError) {
    return (
      <div>
        <Text color="red">An error has occured</Text>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Add your Car"
        >
          <AddCar />
        </Modal>

        <Group position="left">
          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            mb={20}
            onClick={() => setOpened(true)}
          >
            Add your car
          </Button>
        </Group>
      </div>
      <Grid gutter="xl">
        {cars!.map((car) => (
          <Grid.Col sm={6} md={3} key={car._uuid}>
            <CarDetails car={car} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};
