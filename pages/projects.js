import Layout from "@/components/layout"
import ContactSection from "@/components/organisms/ContactSection"
import { useAppContext } from "utils/AppContext"

export default function Projects() {
  const { visitorName } = useAppContext()

  return (
    <Layout>
      <div className="grid place-items-center py-32">
        <h1 className="text-6xl font-bold">
          In no particular order,{" "}
          <span className="capitalize">{visitorName}</span>!
        </h1>

        <span className="mt-16 text-4xl font-medium block">Ready?</span>

        <span className="mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 animate-bounce cursor-pointer mx-auto text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>

          <small className="cursor-pointer text-red-400 mix-blend-screen">
            SCROLL DOWN
          </small>
        </span>
      </div>

      <section className="grid grid-cols-2 gap-6 container mb-24">
        <div>
          <img
            src="/img/projects/1.png"
            className="project-img rounded-md shadow-lg shadow-red-400/10"
          />
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-5xl font-bold">Pageverse</h1>
          <p className="max-w-lg text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div>
            Built with:{" "}
            <span className="space-x-2 ml-1">
              <span>HTML/CSS</span>
              <span>Javascript</span>
              <span>Firebase</span>
            </span>
          </div>

          <div className="space-x-6">
            <a href="" style={{ fontSize: "18px" }}>
              Live
            </a>
            <a href="" style={{ fontSize: "18px" }}>
              Github
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6 container mb-24">
        <div>
          <img src="/img/projects/1.png" className="project-img" />
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-5xl font-bold">Pageverse</h1>
          <p className="max-w-lg text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div>
            Built with:{" "}
            <span className="space-x-2 ml-1">
              <span>HTML/CSS</span>
              <span>Javascript</span>
              <span>Firebase</span>
            </span>
          </div>

          <div className="space-x-6">
            <a href="" style={{ fontSize: "18px" }}>
              Live
            </a>
            <a href="" style={{ fontSize: "18px" }}>
              Github
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6 container mb-24">
        <div>
          <img src="/img/projects/1.png" className="project-img" />
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-5xl font-bold">Pageverse</h1>
          <p className="max-w-lg text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div>
            Built with:{" "}
            <span className="space-x-2 ml-1">
              <span>HTML/CSS</span>
              <span>Javascript</span>
              <span>Firebase</span>
            </span>
          </div>

          <div className="space-x-6">
            <a href="" style={{ fontSize: "18px" }}>
              Live
            </a>
            <a href="" style={{ fontSize: "18px" }}>
              Github
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6 container mb-24">
        <div>
          <img src="/img/projects/1.png" className="project-img" />
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-5xl font-bold">Pageverse</h1>
          <p className="max-w-lg text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div>
            Built with:{" "}
            <span className="space-x-2 ml-1">
              <span>HTML/CSS</span>
              <span>Javascript</span>
              <span>Firebase</span>
            </span>
          </div>

          <div className="space-x-6">
            <a href="" style={{ fontSize: "18px" }}>
              Live
            </a>
            <a href="" style={{ fontSize: "18px" }}>
              Github
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6 container">
        <div>
          <img src="/img/projects/1.png" className="project-img" />
        </div>
        <div className="py-6 space-y-4">
          <h1 className="text-5xl font-bold">Pageverse</h1>
          <p className="max-w-lg text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div>
            Built with:{" "}
            <span className="space-x-2 ml-1">
              <span>HTML/CSS</span>
              <span>Javascript</span>
              <span>Firebase</span>
            </span>
          </div>

          <div className="space-x-6">
            <a href="" style={{ fontSize: "18px" }}>
              Live
            </a>
            <a href="" style={{ fontSize: "18px" }}>
              Github
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
    </Layout>
  )
}
