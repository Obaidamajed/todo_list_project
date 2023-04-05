import React, { Component } from 'react'
import AddItem from './components/AddItem/AddItem'
import TodoItems from './components/TodoItems/TodoItems'

class App extends Component {
  
  state = {
    items : [
      {id:1, name:"obaida", age: 25},
      {id:2, name:"mohammed", age: 23},
      {id:3, name:"ali", age: 24}
    ]
  }

  deleteItem = (id) => {

    // ** Method 1 to delete an item
    
    // let theItems =this.state.items;
    // let i = theItems.findIndex(item => item.id === id) // بقلو أوجدلي الإندكس اللي إلو آيتيم آي دي يساوي ال آي دي اللي ضغطت عليه 
    // // console.log(i);
    // theItems.splice(i,1)
    // this.setState({items:theItems})

    // ** Method 2 to delete an item
  
    let theItems = this.state.items.filter(item =>{
      return item.id !== id // هيك بحذف الآيتيم اللي بضغط عليه كونو بكون item.id === id 

      // item.id هو رقم الآي دي الخاص بكل أوبجيكت بلف عليه الفلتر 
      // id هو رقم الآي دي اللي يساوي آي دي الرو اللي بضغط عليه

      // يعني مثلا ضغطت على الرو الأول اللي هو إلو آي دي رقم 1 , بالتالي حيقارن بين هذا الرقم وكل أرقام الآي دي اللي حيلف عليها الفلتر على أوبجيكت أوبجيكت, الأوبجيكت اللي بكون إلو آي دي لا يساوي آي دي الرو اللي ضغطت عليه حيرجعلي إياه أما اذا كان الآي دي متساوي حيحذفو

      // وباقي الآيتيم بخليهم كونو يحققو شرط 
      // item.id !== id 
    })
    this.setState({
      items : theItems
    })
  }

  addItem = (item) => { // item جاية من صفحة الآد آيتيم واللي هي بتمثل الستايت بصفحة الآد آيتيم
    item.id = Math.random(); // ضفت آي دي للآيتيم اللي بجيبو من صفحة الآد آيتيم حتى ما يطلعلي إيرور بالكونسول
    let theItems = this.state.items;
    theItems.push(item);
    this.setState({items: theItems})
  }

  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/> 
        {/* بعتت الآيتيمز الموجودة بالكومبوننت اللي انا فيه للتو دو آيتيمز عن طريق بروبس اسمو آيتيمز  */}
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App