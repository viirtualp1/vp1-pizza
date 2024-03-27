import { StaticImageData } from "next/image"
import { Sizes, Dough, PizzaData, AdditiveProductData } from "@/types/pizza"

import Pizza1Image from "@/assets/images/pizza1.webp"
import Pizza2Image from "@/assets/images/pizza2.webp"

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

// Функция для генерации случайной пиццы
function generateRandomPizza(id: number): PizzaData {
  const sizes = [Sizes.SMALL, Sizes.AVERAGE, Sizes.BIG]
  const dough = [Dough.TRADITIONAL, Dough.SUBTLE]
  const additives: AdditiveProductData[] = [
    { image: "additive1.jpg", name: "Добавка 1", price: 1.99 },
    { image: "additive2.jpg", name: "Добавка 2", price: 2.49 },
  ]

  return {
    id: id,
    image: getRandomItem<StaticImageData>(PIZZA_IMAGES),
    name: getRandomItem<string>(PIZZA_NAMES),
    structure: "Рандомный состав",
    price: Math.floor(Math.random() * (1000 - 500) + 500),
    radius: Math.floor(Math.random() * (40 - 20) + 20),
    weight: Math.floor(Math.random() * (1000 - 500) + 500),
    sizes: [getRandomItem(sizes)],
    dough: [getRandomItem(dough)],
    additives: [getRandomItem(additives)],
  }
}

export function generateRandomPizzasArray(): PizzaData[] {
  const pizzaArray: PizzaData[] = []

  for (let i = 1; i <= 5; i++) {
    pizzaArray.push(generateRandomPizza(i))
  }

  return pizzaArray
}
