import { useAppContext } from "utils/AppContext"
import ChatForm from "../ChatForm"

export default function ContactSection() {
  const { visitorName } = useAppContext()

  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-medium">
        Like me already {visitorName}? I know!
      </h1>
      <div className="w-1/2 mx-auto mt-8">
        <ChatForm />
      </div>
    </section>
  )
}
