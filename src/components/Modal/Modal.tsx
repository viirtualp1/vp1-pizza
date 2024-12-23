import { FC, ReactNode } from "react"
import Image from "next/image"
import ReactModal from "react-modal"
import { Button } from "../UI/Button"
import { XCircleIcon } from "lucide-react"
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
            <XCircleIcon />
          </Button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </ReactModal>
  )
}
