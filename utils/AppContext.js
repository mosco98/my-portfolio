import { useContext, createContext, useState, useEffect } from "react"
import { useRouter } from "next/router"

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppContextProvider({ children }) {
  const [visitorName, setVisitorName] = useState("")

  const router = useRouter()

  useEffect(() => {
    const visitorNameLocal = JSON.parse(localStorage.getItem("visitor_name"))

    if (visitorNameLocal) {
      setVisitorName(visitorNameLocal)
    } else {
      router.push("/welcome")
    }
  }, [])

  const value = { visitorName, setVisitorName }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
