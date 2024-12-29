import { create } from "zustand"
import { PizzaData } from "@/types/pizza"

const useCartStore = create((set, get) => ({
  cartItems: [] as PizzaData[],

  addToCart: (item: PizzaData) => {
    const currentCart = get().cartItems
    const existingItemIndex = currentCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    if (existingItemIndex !== -1) {
      const updatedCart = currentCart.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
      set({ cartItems: updatedCart })
    } else {
      set({ cartItems: [...currentCart, { ...item, quantity: 1 }] })
    }
  },

  removeFromCart: (id: number) => {
    const currentCart = get().cartItems
    const updatedCart = currentCart.filter((cartItem) => cartItem.id !== id)
    set({ cartItems: updatedCart })
  },

  updateQuantity: (id: number, quantity: PizzaData) => {
    if (quantity <= 0) {
      get().removeFromCart(id)
      return
    }

    const currentCart = get().cartItems
    const updatedCart = currentCart.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, quantity } : cartItem,
    )

    set({ cartItems: updatedCart })
  },

  clearCart: () => {
    set({ cartItems: [] })
  },

  calculateTotal: () => {
    const currentCart = get().cartItems
    return currentCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  },

  calculateTotalItems: () => {
    const currentCart = get().cartItems
    return currentCart.reduce((total, item) => total + item.quantity, 0)
  },
}))

export default useCartStore
