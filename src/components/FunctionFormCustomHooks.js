import React, { useState, useEffect } from "react"
import { Row } from "./Row"

const FunctionForm = () => {
  const width = useWindowWidth()
  const name = useFormInput("Mary")
  const surname = useFormInput("Poppins")
  useDocumentTitle(name.value + " " + surname.value)

  return (
    <section className="form-f">
      <Row title="Name">
        <input type="text" className="input-f" {...name} />
      </Row>
      <Row title="Surname">
        <input type="text" className="input-f" {...surname} />
      </Row>
      <Row title="Width">
        <span>{width}</span>
      </Row>
    </section>
  )
}

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return { value, onChange: handleChange }
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

export function useWindowWidth() {
  const [width, setWidth] = useState()
  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    console.log("Added event listener")
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}

export default FunctionForm
