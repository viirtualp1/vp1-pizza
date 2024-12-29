import { FC, useEffect, useState } from "react"
import Image from "next/image"
import { PizzaData } from "@/types/pizza"
import { Button } from "@/components/UI/Button"
import { PizzaModal } from "../PizzaModal"
import { useModal } from "@/hooks/useModal"
import "./PizzaItem.scss"

interface Props {
  pizza: PizzaData
}

export const PizzaItem: FC<Props> = ({ pizza }) => {
  const { isOpen, open: openModal, close: closeModal } = useModal()

  return (
    <>
      <article className="pizza-item" onClick={openModal}>
        <main className="pizza-item__content">
          <Image
            className="pizza-item__image"
            src={pizza.image}
            alt={pizza.name}
          />

          <div className="pizza-item__name">{pizza.name}</div>
        </main>

        <footer className="pizza-item__footer">
          <div className="pizza-item__price">от {pizza.price} ₽</div>

          <Button>Выбрать</Button>
        </footer>
      </article>

      <PizzaModal pizza={pizza} isOpen={isOpen} close={closeModal} />
    </>
  )
}
