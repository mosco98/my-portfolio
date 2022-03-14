import classNames from "classnames"
import ChatForm from "../ChatForm"
import style from "./ChatModal.module.scss"

export default function ChatModal({ closeModal }) {
  return (
    <div
      className={classNames(
        style.modal,
        "grid place-items-center py-6 px-8 backdrop-blur-md"
      )}
    >
      <span
        className="absolute top-0 right-0 mr-20 mt-7 cursor-pointer"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      <div className={classNames(style.modal_inner, "p-4")}>
        <ChatForm />
      </div>
    </div>
  )
}
