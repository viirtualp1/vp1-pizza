"use client"

import { FC, ReactNode, useEffect, useRef } from "react"
import Link from "next/link"
import "./Button.scss"

interface ButtonData {
  children: ReactNode
  className?: string
  to?: string
  theme?: "accent" | "secondary"
  onClick?: () => void
}

export const Button: FC<ButtonData> = ({
  children,
  className,
  to,
  theme = "secondary",
  onClick,
}) => {
  const classes = useRef(`button ${className} is-${theme}`)

  useEffect(() => {
    classes.current = `button ${className} is-${theme}`
  }, [className, theme])

  const ButtonLink = (
    <Link href={to || ""} className={classes.current}>
      {children}
    </Link>
  )

  const ButtonSimple = (
    <button className={classes.current} onClick={onClick}>
      {children}
    </button>
  )

  return to ? ButtonLink : ButtonSimple
}
