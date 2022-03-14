import { useEffect } from "react"
import Layout from "@/components/layout"
import { useAppContext } from "utils/AppContext"
import Link from "next/link"

export default function Home() {
  const { visitorName, completed } = useAppContext()

  useEffect(() => {
    const name = document.getElementById("my_name")

    if (completed === 100) {
      name.classList.add("animate")
    }
  }, [completed])

  return (
    <Layout>
      <div className="grid place-items-center min-h-screen">
        <div className="pt-24">
          <h1 className="text-5xl font-medium">
            Nice to meet you, <span className="capitalize">{visitorName}</span>{" "}
            <span className="text-7xl waving_emoji">🤝🏿</span>
          </h1>
          <h1 className="text-7xl font-bold mt-4">
            My name is{" "}
            <span className="my_name" id="my_name">
              Moses Enyinnaya
            </span>
            .
          </h1>
          <h1 className="text-7xl font-bold mt-1">I'm a Frontend Developer.</h1>

          <div className="mt-6 space-y-3">
            <h5 className="text-xl text-red-400 font-light select-none">
              Let me show you around yeah? Nice!
            </h5>

            <div className="space-x-7 text-2xl">
              <Link href="/projects">
                <a className="big">Projects</a>
              </Link>
              <a className="big">Résumé</a>
              <Link href="/about-me">
                <a className="big">About me</a>
              </Link>
              <Link href="/blog">
                <a className="big">Blog</a>
              </Link>
              <Link href="faqs">
                <a className="big">Faqs</a>
              </Link>
            </div>
          </div>
          <div className="text-center mt-20 opacity-50 select-none">
            <h1 className="text-xl">
              "You didn't come this far to only come this far!"
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
