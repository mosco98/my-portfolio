import styles from "./Footer.module.scss"
import cn from "classnames"

export default function Footer() {
  return (
    <footer className={cn(styles.footer, "px-4 py-5 text-center")}>
      <div>
        Made by{" "}
        <a
          className="text-blue-800"
          href="https://moscode.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Moscode
        </a>
      </div>
    </footer>
  )
}
