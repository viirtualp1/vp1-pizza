import { FC } from "react"
import "./Button.scss"

interface ButtonData {
  text: string
}

export const Button: FC<ButtonData> = ({ text }) => {
  return <button className="button">{text}</button>
}
