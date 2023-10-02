import { useState } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItems from './AddItems';
import SearchItems from './SearchItems';

function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo_lis") || [])
  )

const localStore = (listItems) => {
  localStorage.setItem("todo_lis",JSON.stringify(listItems))


}
  
const addItem = (item) => {
  const id = items.length ? items[items.length-1].id+1:1
  const addNewItem = {id,checked:false,item}
  const listItems = [...items,addNewItem]
  setItems(listItems)
  localStore(listItems)

}

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked}:item)
    setItems(listItems)
    localStore(listItems)
}

const handleDelete =(id) => {
    const listItems = items.filter((item) => item.id!==id)
    setItems(listItems)
    localStore(listItems)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (!newItem) return;
  addItem(newItem)
  setNewItem('')

}

const [newItem,setNewItem] = useState('')
const [newSearch,setNewSearch] = useState('')
  

  return (
   <div className='App'>
        <Header title="To Do List"/>
        <AddItems
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}/>
          <SearchItems
             newSearch = {newSearch}
             setNewSearch = {setNewSearch}
          />
        <Content
          items = {items.filter(item=> ((item.item).toLowerCase()).includes(newSearch.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}/>
        <Footer
        length = {items.length}/>

   </div> 
  );
}

export default App;
