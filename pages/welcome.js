import { useState, useRef, useEffect } from "react"
import { useAppContext } from "utils/AppContext"
import { useRouter } from "next/router"

export default function Welcome() {
  const [completed, setCompleted] = useState(0)
  const [langIndex, setLangIndex] = useState(0)
  const [startGreeting, updateStartGreeting] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const { setVisitorName } = useAppContext()

  const nameInputRef = useRef()

  const router = useRouter()

  const greetings = ["Ndewo", "Hola", "Bonjour", "Salve", "Olá", "Hello"]

  let visitorNameLocal

  if (typeof window !== "undefined") {
    visitorNameLocal = JSON.parse(localStorage.getItem("visitor_name"))
  }

  useEffect(() => {
    let progressInterval
    let greetingsInterval

    if (visitorNameLocal && !startGreeting) {
      return router.push("/")
    }

    if (startGreeting) {
      progressInterval = setInterval(() => {
        setCompleted((completed) => (completed === 100 ? 100 : completed + 1))
      }, 100)

      greetingsInterval = setInterval(() => {
        setLangIndex((langIndex) =>
          langIndex === greetings.length - 1
            ? greetings.length - 1
            : langIndex + 1
        )
      }, 1500)
    }

    return () => {
      clearInterval(progressInterval)
      clearInterval(greetingsInterval)
    }
  }, [startGreeting])

  useEffect(() => {
    if (completed === 100) {
      router.push("/")
    }
  }, [completed])

  const nameSubmitHandler = (e) => {
    e.preventDefault()
    setErrMsg("")

    if (nameInputRef.current.value === "") {
      return
    }

    if (
      nameInputRef.current.value.split(" ").length > 1 ||
      nameInputRef.current.value.length > 10
    ) {
      return setErrMsg(
        "Hey, I have a short memory. Can you keep the name short? Please...🥺"
      )
    }

    setVisitorName(nameInputRef.current.value)
    updateStartGreeting(true)
    localStorage.setItem(
      "visitor_name",
      JSON.stringify(nameInputRef.current.value)
    )
  }

  if (startGreeting) {
    return (
      <div className="h-screen grid place-items-center container mx-auto">
        <div>
          <h1
            className="big-text pt-24 select-none"
            style={{ lineHeight: "250px" }}
          >
            {greetings[langIndex]}!
          </h1>

          <div className="progress-bar">
            <div className="progress" style={{ width: completed + "%" }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (visitorNameLocal) return <></>

  return (
    <div className="h-screen grid place-items-center container mx-auto">
      <div className="space-y-16 text-center">
        <form className="text-center" onSubmit={nameSubmitHandler}>
          <h1 className="text-7xl font-bold">Yo, What's your name? 😉</h1>
          <span className="text-xl opacity-80">
            {errMsg ? errMsg : `Don't worry, your secrets are safe with me 😁`}
          </span>
          <input
            className="mt-4 w-9/12 block mx-auto bg-transparent border-b-2 text-white text-center outline-none text-5xl font-semibold"
            type="text"
            autoFocus={true}
            ref={nameInputRef}
          />
        </form>

        <button className="btn-primary  px-8 py-3">
          <span className="text-2xl">Continue without name</span>
        </button>
      </div>
    </div>
  )
}
