import { useMutation, useQueryClient } from "react-query";
import { updateCars } from "../../service/carsService";
import { IUpdateCarReq } from "../../types/Cars Type/IUpdateCarReq";
import { keyBuilder } from "../../keyBuilder";

export const useUpdateCarMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateCars, {
    onSuccess: (car) => {
      queryClient.invalidateQueries(keyBuilder.carDetails(car._uuid));
    },
  });
};
