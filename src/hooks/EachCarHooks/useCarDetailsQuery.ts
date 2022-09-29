import { useQuery } from "react-query";
import { getCarsDetails } from "../../service/carsService";
import { keyBuilder } from "../../keyBuilder";

export const useCarDetailsQuery = (uuid: string) => {
  return useQuery(keyBuilder.carDetails(uuid), () => getCarsDetails(uuid));
};
