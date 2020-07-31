import React, { useState, useEffect } from "react"
import { Row } from "./Row"

const FunctionForm = () => {
  const [name, setName] = useState("Mary")
  const [surname, setSurname] = useState("Poppins")
  const [width, setWidth] = useState()

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value)
  }

  function handleResize() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    document.title = name + " " + surname
  }, [name, surname])

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    console.log("Added event listener")
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="form-f">
      <Row title="Name">
        <input
          type="text"
          className="input-f"
          onChange={handleNameChange}
          value={name}
        />
      </Row>
      <Row title="Surname">
        <input
          type="text"
          className="input-f"
          onChange={handleSurnameChange}
          value={surname}
        />
      </Row>
      <Row title="Width">
        <span>{width}</span>
      </Row>
    </section>
  )
}

export default FunctionForm
