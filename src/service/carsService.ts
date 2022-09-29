import axios from "axios";
import { ICar } from "../types/Cars Type/ICar";
import { ICarsPagination } from "../types/Cars Type/ICarsPagination";
import { ICreateCarReq } from "../types/Cars Type/ICreateCarReq";
import { IUpdateCarReq } from "../types/Cars Type/IUpdateCarReq";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5004",
});

export const getCars = async () => {
  const { data } = await axiosInstance.get<ICarsPagination>("/cars");
  return data.items;
};

export const getCarsDetails = async (uuid: string) => {
  const { data } = await axiosInstance.get<ICar>(`/cars/${uuid}`);
  return data;
};

export const postCars = async (req: ICreateCarReq) => {
  const { data } = await axiosInstance.post<{ items: ICar[] }>("/cars", [req]);
  return data;
};

export const updateCars = async (req: IUpdateCarReq) => {
  const { uuid, ...rest } = req;
  const { data } = await axiosInstance.put<ICar>(`/cars/${uuid}`, rest);
  return data;
};
