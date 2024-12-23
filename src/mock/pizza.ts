import { StaticImageData } from "next/image"
import { AdditiveProductData, Dough, PizzaData, Sizes } from "@/types/pizza"

import Pizza1Image from "@/assets/images/pizza1.webp"
import Pizza2Image from "@/assets/images/pizza2.webp"

import Additive1Image from "@/assets/images/additive1.png"
import Additive2Image from "@/assets/images/additive2.png"

const PIZZA_NAMES = [
  "Пепперони",
  "Ветчина и сыр",
  "Мясная",
  "Песто",
  "Бургер-пицца",
  "Сырный цыпленок",
  "Маргарита",
  "Диабло",
  "Колбаски барбекю",
  "Двойная пепперони",
  "Четыре сезона",
  "Гавайская",
]

const PIZZA_IMAGES = [Pizza1Image, Pizza2Image]

function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateRandomPizza(id: number): PizzaData {
  const additives: AdditiveProductData[] = [
    { image: Additive1Image, name: "Пряная говадина", price: 1.99 },
    { image: Additive2Image, name: "Сырный бортик", price: 2.49 },
  ]

  return {
    id: id,
    image: getRandomItem<Object>(PIZZA_IMAGES),
    name: getRandomItem<string>(PIZZA_NAMES),
    structure: "Рандомный состав",
    price: Math.floor(Math.random() * (1000 - 500) + 500),
    radius: Math.floor(Math.random() * (40 - 20) + 20),
    weight: Math.floor(Math.random() * (1000 - 500) + 500),
    sizes: [Sizes.SMALL, Sizes.AVERAGE, Sizes.BIG],
    dough: [Dough.TRADITIONAL, Dough.SUBTLE],
    additives: [getRandomItem(additives), getRandomItem(additives)],
  }
}

export function generateRandomPizzasArray(): PizzaData[] {
  const pizzaArray: PizzaData[] = []

  for (let i = 1; i <= 5; i++) {
    pizzaArray.push(generateRandomPizza(i))
  }

  return pizzaArray
}
