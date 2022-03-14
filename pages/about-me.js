import Layout from "@/components/layout"
import ContactSection from "@/components/organisms/ContactSection"

export default function AboutMe() {
  return (
    <Layout>
      <div className="grid place-items-center py-32 about-me-hero">
        <h1 className="text-9xl font-bold">Story time!</h1>

        <span className="mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 animate-bounce cursor-pointer mx-auto"
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

          <small className="cursor-pointer mix-blend-screen">
            KEEP SCROLLING
          </small>
        </span>
      </div>

      <section className="min-h-screen me-section">
        <div className="px-12 space-y-6 text-ctn">
          <p className="text-2xl">
            Like love at first sight, I stumbled upon tech and programming 2019,
            and fortunately, fell in love! Since then it has been an integral
            part of me. Coming from a Mathematics background, it was so easy for
            me to understand the logical reasonings behind building
            apps/websites and solving problems with code generally.
          </p>

          <p className="text-2xl">
            Like love at first sight, I stumbled upon tech and programming 2019,
            and fortunately, fell in love! Since then it has been an integral
            part of me. Coming from a Mathematics background, it was so easy for
            me to understand the logical reasonings behind building
            apps/websites and solving problems with code generally.
          </p>

          <p className="text-2xl">
            Like love at first sight, I stumbled upon tech and programming 2019,
            and fortunately, fell in love! Since then it has been an integral
            part of me. Coming from a Mathematics background, it was so easy for
            me to understand the logical reasonings behind building
            apps/websites and solving problems with code generally.
          </p>
        </div>
      </section>

      <ContactSection />
    </Layout>
  )
}
