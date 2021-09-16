import { ActionTypes } from "../action-types";

export interface IProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: object
}