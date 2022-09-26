import {React, useState} from 'react'
import { Card} from 'react-bootstrap'
import TodoListForm from '../components/TodoListForm'
import TodoListList from '../components/TodoListList'

const HomeScreen = () => {

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo] = useState();

  const handleEditClick=(data)=>{
    setEditFormVisibility(true);
    setEditTodo(data);
    console.log(data);
  }


  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <>
      <h1 className='text-info text-center'>TO DO APP</h1>
      <Card>
        <TodoListForm setEditFormVisibility = {setEditFormVisibility} editFormVisibility={editFormVisibility} editTodo = {editTodo} cancelUpdate = {cancelUpdate} />
      </Card>

      <h1 className='text-info text-center'>A to-do list to organize your work &amp;	life</h1>
      <TodoListList  handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
    </>

  )
}

export default HomeScreen;

// HomeSceen = App.js;
// Form = Form;
// todo = List;
