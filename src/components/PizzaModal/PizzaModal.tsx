import { FC, useState } from "react"
import Image from "next/image"
import { PizzaData } from "@/types/pizza"
import { Modal } from "@/components/Modal"
import "./PizzaModal.scss"
import { Button } from "../UI/Button"

interface Props {
  pizza: PizzaData
  isOpen: boolean
  close: () => void
}

export const PizzaModal: FC<Props> = ({ pizza, isOpen, close }) => {
  const sizes = ["Маленькая", "Средняя", "Большая"]
  const doughs = ["Традиционное", "Тонкое"]

  const [currentSize, setCurrentSize] = useState(0)
  const [currentDough, setCurrentDough] = useState(0)

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      prepend={<Image src={pizza.image} alt="hello" />}
      className="pizza-modal"
      title={pizza.name}
    >
      <div className="pizza-modal__body">
        <div className="pizza-modal__info">
          {pizza.radius} см, традиционное тесто, {pizza.weight} г
        </div>
        <div className="pizza-modal__structure">{pizza.structure}</div>

        <div className="pizza-modal__sizes">
          {pizza.sizes.map((size, idx) => (
            <div
              className={`pizza-modal__size ${currentSize === idx && "is-active"}`}
              key={`size-${idx}`}
              onClick={() => setCurrentSize(idx)}
            >
              <div className="pizza-modal__size-text">{sizes[size]}</div>
            </div>
          ))}
        </div>

        <div className="pizza-modal__sizes">
          {pizza.dough.map((dough, idx) => (
            <div
              className={`pizza-modal__size ${currentDough === idx && "is-active"}`}
              key={`dough-${idx}`}
              onClick={() => setCurrentDough(idx)}
            >
              <div className="pizza-modal__size-text">{doughs[dough]}</div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
