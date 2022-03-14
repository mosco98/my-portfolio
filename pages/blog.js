import Layout from "@/components/layout"
import { useAppContext } from "utils/AppContext"

export default function Blog() {
  const { visitorName } = useAppContext()

  return (
    <Layout>
      <div className="grid place-items-center pt-32 text-center">
        <div>
          <h1 className="text-6xl font-bold">Hey, {visitorName}!</h1>
          <h1 className="text-6xl font-bold mt-1">
            What to see here remains unready
          </h1>
          <h1 className="text-4xl font-light">...but not for too long</h1>
        </div>

        <div>
          <h1>But you can be the first to know when we are up and running</h1>
        </div>
      </div>
    </Layout>
  )
}
