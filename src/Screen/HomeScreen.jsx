import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import TodoListForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
const HomeScreen = () => {
    const [editFormVisibility, setEditFormVisibility] = useState(false);

    const [editTodo, setEditTodo] = useState();

    const handleEditClick = (data) => {
        setEditFormVisibility(true);
        setEditTodo(data);
        console.log(data);
    };

    const cancelUpdate = () => {
        setEditFormVisibility(false);
    };

    return (
        <>
            <h1 className="text-info text-center">LOGIN APP </h1>
            <Card>
                <TodoListForm
                    setEditFormVisibility={setEditFormVisibility}
                    editFormVisibility={editFormVisibility}
                    editTodo={editTodo}
                    cancelUpdate={cancelUpdate}
                />
            </Card>

            <h1 className="text-info text-center">hello world</h1>
            <TodoList handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
        </>
    );
};

export default HomeScreen;
