import { FC } from "react"
import "./AppNav.scss"
import { Button } from "../UI/Button"
import Image from "next/image"
import LogoIcon from "@/assets/images/logo.svg"
import Link from "next/link"

export const AppNav: FC = () => {
  return (
    <nav className="container content app-nav">
      <div className="app-nav__content">
        <Link href="/">
          <Image src={LogoIcon} alt="logo" />
        </Link>
      </div>

      <Button theme="accent" to="/cart">
        Корзина
      </Button>
    </nav>
  )
}
