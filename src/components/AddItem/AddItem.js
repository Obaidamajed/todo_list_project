import React, { Component } from 'react'
import "./AddItem.css"

class AddItem extends Component {
  state = {
    name : "",
    age : ""
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id] : e.target.value // هيك بحط بالنايم والآيج القيم اللي بدخلها في الانبوتس اللي الهم آي دي نايم وآي دي أيج في لاين 26 و لاين 27
      // [e.target.id] : e.target.value = name : e.target.value 
      // [e.target.id] : e.target.value = age : e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.name.value === "") { // اذا كان المحتوى فاضي ما بضيف اشي 
      return false
    } else {
      this.props.addItem(this.state)
    this.setState ({ // هاي الحركة عشان يرجع يفضيلي اياهم ويصير الانبوت فاضي مع الفاليو اللي أعطيتو للإنبوتس الثنين بلاين 31 و 32
      name: "",
      age: ""
    })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Enter name . . .' id="name" onChange={this.handleChange} value={this.state.name} />
          <input type="number" placeholder='Enter age . . .' id="age" onChange={this.handleChange} value={this.state.age} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddItem