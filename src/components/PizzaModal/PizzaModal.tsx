import { FC } from "react"
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
  const dough = ["традиционное", "тонкое"]

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

        <div className="pizza-modal__additives-title">Добавить по вкусу</div>

        <div className="pizza-modal__additives">
          {pizza.additives.map((additive, idx) => (
            <div className="pizza-modal__additive" key={idx}>
              <Image
                src={additive.image}
                alt="additive"
                width={30}
                height={30}
              />

              {additive.name}
            </div>
          ))}
        </div>
      </div>

      <Button className="pizza-modal__button" theme="accent">
        Добавить в корзину
      </Button>
    </Modal>
  )
}
