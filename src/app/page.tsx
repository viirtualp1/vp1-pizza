"use client"

import { useEffect, useState } from "react"
import { generateRandomPizzasArray } from "@/mock/pizza"
import { PizzaData } from "@/types/pizza"
import { PizzaItem } from "@/components/PizzaItem"
import "./IndexPage.scss"

export default function IndexPage() {
  const [pizzas, setPizzas] = useState<PizzaData[]>([])

  useEffect(() => {
    setPizzas(generateRandomPizzasArray())
  }, [])

  return (
    <main className="container content index-page">
      <h1 className="index-page__title">Пиццы</h1>

      <section className="index-page__pizzas">
        {pizzas.map((pizza) => (
          <PizzaItem pizza={pizza} key={pizza.id} />
        ))}
      </section>
    </main>
  )
}
