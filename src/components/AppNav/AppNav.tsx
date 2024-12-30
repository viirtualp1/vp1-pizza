"use client"

import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../UI/Button"
import { useCartStore } from "@/store/cart"
import LogoIcon from "@/assets/images/logo.svg"
import { useRouter } from "next/navigation"
import "./AppNav.scss"

export const AppNav: FC = () => {
  const cartItemsLength = useCartStore((state) => state.cartItems.length)
  const route = useRouter()

  return (
    <nav className="container content app-nav">
      <div className="app-nav__content">
        <Link href="/">
          <Image src={LogoIcon as string} alt="logo" />
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
    </nav>
  )
}
