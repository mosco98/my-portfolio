import { useState, useEffect } from "react"
import { useAppContext } from "utils/AppContext"
import { useRouter } from "next/router"
import ChatModal from "./organisms/ChatModal"
import Footer from "./organisms/Footer"
import NavBar from "./organisms/NavBar"

export default function Layout({ children }) {
  const [showChatModal, updateShowChatModal] = useState(false)
  const { visitorName } = useAppContext()

  let onHomePage = false

  const router = useRouter()

  useEffect(() => {
    if (showChatModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showChatModal])

  if (router.pathname === "/") {
    onHomePage = true
  } else {
    onHomePage = false
  }

  if (!visitorName) return <></>

  return (
    <>
      <header
        className={!onHomePage ? "sticky top-0 w-full" : "fixed top-0 w-full"}
        style={{ zIndex: "100000" }}
      >
        <NavBar
          onHomePage={onHomePage}
          showModal={() => updateShowChatModal(true)}
        />
      </header>
      <main className="main container mx-auto overflow-x-hidden">
        {children}
      </main>

      {showChatModal && (
        <ChatModal closeModal={() => updateShowChatModal(false)} />
      )}
      {/* <Footer /> */}
    </>
  )
}
