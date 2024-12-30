"use client"

import { FC, LegacyRef, ReactNode, useEffect, useState } from "react"
import "./Button.scss"

interface ButtonData {
  children: ReactNode
  className?: string
  theme?: "accent" | "secondary"
  prependIcon?: JSX.Element
  onClick?: () => void
  ref?: LegacyRef<HTMLButtonElement>
}

export const Button: FC<ButtonData> = ({
  children,
  className,
  theme = "secondary",
  prependIcon,
  onClick,
  ref,
}) => {
  const [classes, setClasses] = useState(`button ${className} is-${theme}`)

  useEffect(() => {
    let tempClasses = []

    if (className) {
      tempClasses.push(className)
    }

    if (theme) {
      tempClasses.push(`is-${theme}`)
    }

    setClasses(`button ${tempClasses.join(" ")}`)
  }, [className, theme])

  return (
    <button ref={ref} className={classes} onClick={onClick}>
      {prependIcon && <span className="button__icon">{prependIcon}</span>}

      {children}
    </button>
  )
}
