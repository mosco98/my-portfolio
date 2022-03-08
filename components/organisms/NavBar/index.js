import styles from "./NavBar.module.scss"
import cn from "classnames"

export default function NavBar() {
  return (
    <nav className={cn(styles.nav, "px-4 py-5")}>
      <h1 className="text-4xl font-bold">LOGO</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="bg-blue-800 py-2 px-7 rounded-2xl">{`Let's Chat`}</button>
    </nav>
  )
}
