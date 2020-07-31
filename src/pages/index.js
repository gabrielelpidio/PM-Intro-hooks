import React from "react"
import "./index.css"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import { Row } from "../components/Row"

export default () => {
  return (
    <Layout>
      <section className="grid gap-32">
        <Row>
          <Link
            className="text-white font-bold text-2xl bg-blue-700 rounded-lg"
            to="/function"
          >
            Form with Hooks
          </Link>
        </Row>
        <Row>
          <Link
            className="text-white font-bold text-2xl bg-blue-700 rounded-lg"
            to="/class"
          >
            Form with Class
          </Link>
        </Row>
      </section>
    </Layout>
  )
}
