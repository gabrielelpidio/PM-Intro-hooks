import React from "react"
import { Row } from "./Row"

class ClassForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Mary",
      surname: "Poppins",
      width: 0,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
    this.setState({
      width: window.innerWidth,
    })
    document.title = this.state.name + " " + this.state.surname
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    })
  }

  render() {
    return (
      <section className="form-c">
        <Row title="Name">
          <input
            className="input-c"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
        <Row title="Surname">
          <input
            className="input-c"
            type="text"
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
        <Row title="Width">
          <span>{this.state.width}</span>
        </Row>
      </section>
    )
  }
}

export default ClassForm
