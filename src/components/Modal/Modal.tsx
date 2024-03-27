import { FC, ReactNode } from "react"
import Image from "next/image"
import { default as ReactModal } from "react-modal"
import { Button } from "../UI/Button"
import CloseIcon from "@/assets/images/close.svg"
import "./Modal.scss"

interface Props {
  prepend?: ReactNode
  children?: ReactNode
  isOpen: boolean
  className?: string
  close: () => void
  title: string
}

export const Modal: FC<Props> = ({
  children,
  prepend,
  isOpen,
  className,
  title,
  close,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      className={`modal ${className}`}
    >
      <div className="modal__prepend">{prepend}</div>
      <div className="modal__content">
        <div className="modal__header">
          <div className="modal__title">{title}</div>

          <Button onClick={close}>
            <Image src={CloseIcon} alt="close" />
          </Button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </ReactModal>
  )
}
