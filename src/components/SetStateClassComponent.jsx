import React from "react"

class SetStateClassComponent extends React.Component {
  state = {
    name: "",
  }
  setInput = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(e.target.name)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>{this.state.name}</h2>
        <input name="name" onChange={this.setInput} value={this.state.name} type="text" />
      </div>
    )
  }
}

export default SetStateClassComponent
