import Footer from "./organisms/Footer"
import NavBar from "./organisms/NavBar"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
