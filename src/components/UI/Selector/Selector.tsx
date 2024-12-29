import { useEffect, useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import "./Selector.scss"

interface Props {
  value: number
  items: any[]
  itemText: (item: any) => string
  className?: string
  onClick?: (idx: number) => void
}

export default function Selector({
  items,
  value,
  itemText,
  className,
  onClick,
}: Props) {
  const [parent] = useAutoAnimate()
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    setSelected(value)
  }, [value])

  const handleClick = (index: number) => {
    if (!onClick) return null

    onClick(index)
  }

  return (
    <div className={`selector ${className}`} ref={parent}>
      {items.map((item, idx) => (
        <div
          className={`selector__item ${selected === idx ? "is-active" : ""}`}
          key={`selector-${idx}`}
          onClick={() => handleClick(idx)}
        >
          <div className="selector__item-text">
            {itemText ? itemText(item) : item}
          </div>
        </div>
      ))}
    </div>
  )
}
