import { StaticImageData } from "next/image"

export enum Sizes {
  SMALL = 0,
  AVERAGE = 1,
  BIG = 2,
}

export enum Dough {
  TRADITIONAL = 0,
  SUBTLE = 1,
}

export interface AdditiveProductData {
  image: Object
  name: string
  price: number
}

export interface PizzaData {
  id: number
  image: Object
  name: string
  structure: string
  price: number
  radius: number
  weight: number
  sizes: Sizes[]
  dough: Dough[]
  additives: AdditiveProductData[]
}
