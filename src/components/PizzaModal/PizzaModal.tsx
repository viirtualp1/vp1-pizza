import { FC, useEffect, useState } from "react"
import Image from "next/image"
import { TrashIcon, ShoppingCartIcon } from "lucide-react"
import { PizzaData } from "@/types/pizza"
import { Modal } from "@/components/Modal"
import { Button } from "../UI/Button"
import { Selector } from "../UI/Selector"
import useCartStore from "@/store/cart"
import "./PizzaModal.scss"

interface Props {
  pizza: PizzaData
  isOpen: boolean
  close: () => void
}

const sizes = ["Маленькая", "Средняя", "Большая"]
const doughs = ["Традиционное", "Тонкое"]

export const PizzaModal: FC<Props> = ({ pizza, isOpen, close }) => {
  const { addToCart, removeFromCart } = useCartStore()
  const cartItems = useCartStore((state) => state.cartItems)
  const isAddedToCart = cartItems.some((item) => item.id === pizza.id)

  const [currentSize, setCurrentSize] = useState(0)
  const [currentDough, setCurrentDough] = useState(0)

  const handleAddToCart = () => {
    isAddedToCart ? removeFromCart(pizza.id) : addToCart(pizza)
  }

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

        <Selector
          items={pizza.sizes}
          value={currentSize}
          onClick={setCurrentSize}
          itemText={(size) => sizes[size]}
        />

        <Selector
          value={currentDough}
          items={pizza.dough}
          itemText={(dough) => doughs[dough]}
          onClick={setCurrentDough}
        />

        <div className="pizza-modal__additives-title">Добавить по вкусу</div>

        <div className="pizza-modal__additives">
          {pizza.additives.map((additive, idx) => (
            <div className="pizza-modal__additive" key={idx}>
              <Image
                src={additive.image}
                className="pizza-modal__additive-image"
                width="100"
                alt="additive"
              />

              <div className="pizza-modal__additive-info">
                <div className="pizza-modal__additive-name">
                  {additive.name}
                </div>
                <div className="pizza-modal__additive-price">
                  {additive.price} ₽
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="pizza-modal__button"
        theme={isAddedToCart ? "secondary" : "accent"}
        onClick={handleAddToCart}
        prependIcon={
          isAddedToCart ? (
            <TrashIcon size={18} />
          ) : (
            <ShoppingCartIcon size={18} />
          )
        }
      >
        {isAddedToCart ? "Убрать из корзины" : "Добавить в корзину"}
      </Button>
    </Modal>
  )
}
