import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { ICar } from "../../../../../../types/Cars Type/ICar";

interface CarDetailsProps {
  car: ICar;
}

export const CarDetails = ({ car }: CarDetailsProps) => {
  return (
    <Card shadow="xl" p="md" radius="md" withBorder>
      <Card.Section>
        <Image src={car.image} height={240} alt="Car" />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text size="xl" weight={700}>
          {car.brand} {car.model}
        </Text>
        <Badge size="lg" color="green" variant="light">
          km: {car.km}
        </Badge>
      </Group>
      <Group position="apart" mt="md" mb="xs">
        <Text size="sm">{car.description}</Text>
        <Badge size="md" color="gray" variant="outline">
          {car.year}
        </Badge>
      </Group>
    </Card>
  );
};
