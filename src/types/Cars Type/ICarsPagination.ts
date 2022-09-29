import { ICar } from "./ICar"

export interface ICarsPagination {
  cursor: unknown
  items: ICar[]
  next_page: unknown
}
