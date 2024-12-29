"use client"

import { FC, ReactNode, useEffect, useRef, useState } from "react"
import Link from "next/link"
import "./Button.scss"

interface ButtonData {
  children: ReactNode
  className?: string
  to?: string
  theme?: "accent" | "secondary"
  prependIcon?: JSX.Element
  onClick?: () => void
}

export const Button: FC<ButtonData> = ({
  children,
  className,
  to,
  theme = "secondary",
  prependIcon,
  onClick,
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

  const ButtonLink = (
    <Link href={to || ""} className={classes}>
      {children}
    </Link>
  )

  const ButtonSimple = (
    <button className={classes} onClick={onClick}>
      <span className="button__body">
        {prependIcon && <span className="button__icon">{prependIcon}</span>}

        {children}
      </span>
    </button>
  )

  return to ? ButtonLink : ButtonSimple
}
