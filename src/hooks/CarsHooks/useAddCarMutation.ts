import { useMutation, useQueryClient } from "react-query";
import { postCars } from "../../service/carsService";
import { keyBuilder } from "../../keyBuilder";

export const useAddCarMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postCars, {
    onSuccess: () => {
      queryClient.invalidateQueries(keyBuilder.cars());
    },
  });
};
