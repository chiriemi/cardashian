import { useQuery } from "react-query";
import { keyBuilder } from "../../keyBuilder";
import { getCars } from "../../service/carsService";

export const useCarsQuery = () => {
  return useQuery(keyBuilder.cars(), getCars);
};
