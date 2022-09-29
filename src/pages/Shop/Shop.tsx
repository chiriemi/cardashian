import {
  AppShell,
  Badge,
  Button,
  Card,
  Grid,
  Group,
  NavLink,
  Image,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <div>
      <Grid justify="center" pt="5rem" gutter="xl">
        <Grid.Col md={3} lg={3}>
          <Card
            style={{ cursor: "pointer" }}
            shadow="sm"
            p="lg"
            radius="xl"
            withBorder
            component={Link}
            to="/shop/cars"
          >
            <Card.Section>
              <Image
                src="https://i.pinimg.com/736x/4b/5e/99/4b5e99293c50ba7c3807a4c14933285f--car-shop-showrooms.jpg"
                height={220}
                alt="Cars shop"
              />
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={500}>Car Market</Text>
              <Badge color="green" variant="light">
                New
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              Here you can find the perfect car for you, or you can make your
              car perfect for somebody else.
            </Text>

            <Button
              variant="outline"
              size="lg"
              color="lime"
              fullWidth
              mt="md"
              radius="md"
            >
              Shop Cars
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col md={3}>
          <Card
            shadow="sm"
            p="lg"
            radius="xl"
            withBorder
            component={Link}
            to="/shop/parts"
            style={{ cursor: "pointer" }}
          >
            <Card.Section>
              <Image
                src="https://e7.pngegg.com/pngimages/675/255/png-clipart-car-online-shopping-man-se-sales-car-service-car.png"
                height={220}
                alt="Norway"
              />
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text weight={500}>Shop Parts</Text>
            </Group>

            <Text size="sm" color="dimmed">
              If you already know what parts your car needs, add them to your
              cart.
            </Text>

            <Button
              size="lg"
              variant="outline"
              color="lime"
              fullWidth
              mt="md"
              radius="md"
            >
              Add Parts
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};
