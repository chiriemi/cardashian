import { TextInput, Button } from "@mantine/core";
import { title } from "process";
import React, { useState } from "react";
import { useAddCarMutation } from "../../../../../../hooks/CarsHooks/useAddCarMutation";
import { useUpdateCarMutation } from "../../../../../../hooks/EachCarHooks/useUpdateCarMutation";
import { ICar } from "../../../../../../types/Cars Type/ICar";

interface UpdateCarProps {
  car: ICar;
}

export const UpdateCarDescription = ({ car }: UpdateCarProps) => {
  const [description, setDescription] = useState(car.description);
  const { isLoading, isError, mutate } = useUpdateCarMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ uuid: car._uuid, description });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          label="Description"
          value={description}
        />
        <Button loading={isLoading} type="submit" mt={20}>
          Update
        </Button>
      </form>
    </div>
  );
};
