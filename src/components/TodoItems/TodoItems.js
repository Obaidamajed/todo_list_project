import React from 'react'
import "./TodoItems.css"

const TodoItems = (props) => { // بستقبل الآيتيمز من خلال باراميتر اللي اسمو بروبس
  const {items} = props; // هيك بقلو هاتلي الآيتيمز من البروبس الخاص بالتودو آيتيمز وحطلي اياها في متغير اسمو آيتيمز
  const {deleteItem} = props;
  // const {items , deleteItem} = props; تساوي السطرين رقم 5 و 6 
  let length = items.length;
  const ListItems = length ? ( // معنى هذا الاشي يعني لو اللينقث عبارة عن ترو يعني عبارة عن أي رقم غير الصفر يعني كان في عندي أيتميز .. اعرضلي التالي: 
  // أما لو كان صفر طلعلي رسالة 
    items.map(item => {
      return(
        <div key={item.id}>
          <span className='name'>{item.name}</span>
          <span className='age'>{item.age}</span>
          <span className='action icon' onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
      )
    })
  ) : (
    <p>There is no item to show</p>
  )


  return (
    <div className='ListItems'>

        <div>
            <span className='name title'>Name</span>
            <span className='age title'>Age</span>
            <span className='action title'>Action</span>
        </div>
        {ListItems}
        
    </div>
  )
}

export default TodoItems

