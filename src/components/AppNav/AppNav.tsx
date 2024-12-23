import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../UI/Button"
import "./AppNav.scss"
import LogoIcon from "@/assets/images/logo.svg"

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
