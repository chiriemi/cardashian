import { Center, Loader, Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useCarDetailsQuery } from "../../../../../hooks/EachCarHooks/useCarDetailsQuery";
import { CarDetails } from "../../Cars/Car/components/CarDetails";
import { UpdateCarDescription } from "./components/UpdateCarDescription";

export const EachCar = () => {
  const { uuid } = useParams();

  const { isError, isLoading, data: car } = useCarDetailsQuery(uuid || "");

  if (isLoading || !car) {
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
      <UpdateCarDescription car={car} />
      <CarDetails car={car} />
    </div>
  );
};
