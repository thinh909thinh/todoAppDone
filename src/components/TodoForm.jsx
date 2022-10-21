import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, handleLogoutUser } from '../redux/actions/listActions';

const TodoListForm = ({ setEditFormVisibility, editFormVisibility, editTodo, cancelUpdate }) => {
    const data = useSelector((state) => state.todoItems);
    const { checkUserLogin } = data;
    console.log(data);
    const dispatch = useDispatch();
    // const [list, setList] = useState();
    const [password, setPassword] = useState();
    const [item, setItem] = useState();
    const [user, setUser] = useState(false);
    const focus = useRef();
    const focus2 = useRef();
    const userLogin = (todoListValue) => {
        setUser(true);
    };
    // submit
    const submitHandler = (e) => {
        const todoListValue = {
            password: +password,
            title: item,
            completed: false,
        };
        e.preventDefault();
        dispatch(addList(todoListValue));
        // setItem('');
        setPassword('');
        focus.current.focus();
    };

    // const [editValue, setEditValue] = useState();

    // useEffect(() => {
    //     if (!editTodo) {
    //         return;
    //     }
    //     setEditValue(editTodo.title);
    // }, [editTodo]);

    // const editSubmit = (e) => {
    //     setEditFormVisibility(false);
    //     e.preventDefault();
    //     const todoListValue = {
    //         ...editTodo,
    //         title: editValue,
    //     };
    //     dispatch(handleUpdateEditSubmit(todoListValue));
    //     // setEditValue('');
    // };
    const handleLogout = () => {
        // lam gi day
        dispatch(handleLogoutUser());
        setItem('');
        setUser(false);
    };
    !checkUserLogin ? (document.title = 'LOGIN') : (document.title = 'LOGOUT');
    return (
        <>
            {!checkUserLogin ? (
                <>
                    <Form className="mx-2 my-2" onSubmit={submitHandler}>
                        <Form.Group controlId="inputList">
                            <Row>
                                <div className="text-center">Add your todo-item</div>
                                <Col md={12} lg={12}>
                                    <Form.Control
                                        ref={focus}
                                        type="text"
                                        value={item || ''}
                                        onChange={(e) => setItem(e.target.value)}
                                        placeholder="Name"
                                        required
                                    />
                                </Col>
                                <Col md={12} lg={12}>
                                    <Form.Control
                                        ref={focus2}
                                        type="text"
                                        value={password || ''}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                </Col>
                                <Col md={4} lg={3} className="mt-sm-1 mt-md-0 ">
                                    <Button type="submitted" onClick={userLogin}>
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </>
            ) : (
                <>
                    {user === true ? <h1 className="text-black-50  text-center">{`Welcome  : ${item}`}</h1> : ''}
                    <Button type="submitted" onClick={handleLogout}>
                        Logout
                    </Button>
                </>
            )}
        </>
    );
};

export default memo(TodoListForm);
