import { Button, Center, Group, NumberInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddCarMutation } from "../../../../../../hooks/CarsHooks/useAddCarMutation";
import { ICreateCarReq } from "../../../../../../types/Cars Type/ICreateCarReq";

export const AddCar = () => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      brand: "",
      model: "",
      km: 1,
      description: "",
      image: "",
      year: 2000,
    },
    mode: "onBlur",
  });

  const { isLoading, mutate: addCar, data } = useAddCarMutation();

  const onSubmit = async (values: ICreateCarReq) => {
    const { km, ...rest } = values;
    addCar(
      {
        km: Number(km),
        ...rest,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };
  return (
    <div>
      {data?.items[0] && (
        <div>
          You just added your car to the market {data.items[0].brand}{" "}
          {data.items[0].model}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="Brand"
          label="Brand"
          withAsterisk
          error={formState.errors?.brand?.message}
          {...register("brand")}
        />
        <TextInput
          placeholder="Model"
          label="Model"
          withAsterisk
          error={formState.errors?.model?.message}
          {...register("model")}
        />
        <Group position="apart" mt="md" mb="xs">
          <TextInput
            type="number"
            placeholder="Enter Km"
            description="Enter current k-meters"
            label="Km"
            variant="filled"
            error={formState.errors?.km?.message}
            withAsterisk
            {...register("km")}
          />
          <TextInput
            type="number"
            placeholder="Enter factory year"
            label="Year"
            description="Enter first registration year"
            variant="filled"
            error={formState.errors?.km?.message}
            withAsterisk
            {...register("year")}
          />
        </Group>
        <TextInput
          placeholder="Description"
          label="Description"
          withAsterisk
          error={formState.errors?.model?.message}
          {...register("description")}
        />
        <TextInput
          placeholder="Image Url"
          label="Image Url"
          withAsterisk
          error={formState.errors?.model?.message}
          {...register("image")}
        />
        <Center>
          <Button color="lime" loading={isLoading} type="submit" mt={20}>
            Add
          </Button>
        </Center>
      </form>
    </div>
  );
};
