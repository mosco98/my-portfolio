import styles from "./NavBar.module.scss"
import cn from "classnames"
import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar({ showModal, onHomePage }) {
  const router = useRouter()

  const activeClass = (route) => {
    if (route === router.pathname) {
      return styles.active
    }
  }

  return (
    <nav className={cn(styles.nav, "px-10 py-5 bg-black/50 backdrop-blur-md")}>
      <h1 className="text-4xl font-bold">LOGO</h1>
      <ul className={classNames("select-none", onHomePage && "opacity-0")}>
        <li>
          <Link href="/projects">
            <a className={activeClass("/projects")}>Projects</a>
          </Link>
        </li>
        <li>
          <a>Résumé</a>
        </li>
        <li>
          <Link href="/about-me">
            <a className={activeClass("/about-me")}>About me</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={activeClass("/blog")}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/faqs">
            <a className={activeClass("/faqs")}>Faqs</a>
          </Link>
        </li>
      </ul>
      <div className="relative">
        <button className="ml-20 btn_has_waves" onClick={showModal}>
          Let's talk!
          <div className="wave"></div>
        </button>

        <div className="flex flex-col items-center justify-center left-[56.5%] absolute  mt-8 text-center space-y-4">
          <a
            href="https://github.com/mosco98"
            className="inline-block"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/moses-enyinnaya-142282197/"
            className="inline-block"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href="https://www.linkedin.com/in/moses-enyinnaya-142282197/"
            className="inline-block"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            Polywork
          </a>

          <a
            href="https://twitter.com/mosesenyiinnaya"
            className="inline-block"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
    </nav>
  )
}
