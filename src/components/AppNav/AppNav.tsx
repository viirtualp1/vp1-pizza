"use client"

import { FC } from "react"
import Link from "next/link"
import { Button } from "../UI/Button"
import { useCartStore } from "@/store/cart"
import { useRouter } from "next/navigation"
import "./AppNav.scss"

export const AppNav: FC = () => {
  const cartItemsLength = useCartStore((state) => state.cartItems.length)
  const route = useRouter()

  return (
    <nav className="app-nav container content">
      <div className="app-nav__content">
        <div className="app-nav__body">
          <Link href="/" className="app-nav__title">
            VpPizza
          </Link>
        </div>

        <Button theme="accent" onClick={() => route.push("/cart")}>
          Корзина
          {cartItemsLength > 0 && (
            <span className="app-nav__count">
              <span className="app-nav__count-divider" />
              <span className="app-nav__count-text">{cartItemsLength}</span>
            </span>
          )}
        </Button>
      </div>
    </nav>
  )
}
