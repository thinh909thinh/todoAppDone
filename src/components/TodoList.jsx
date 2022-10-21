import { React, useEffect } from 'react';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './style.css';
import { getAll } from '../redux/actions/listActions';

const TodoList = ({ handleEditClick, editFormVisibility }) => {
    const data = useSelector((state) => state.todoItems);
    const dispatch = useDispatch();
    const { todoList, checkUserLogin } = data;
    // console.log('data ne', data);
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    return (
        <>
            {checkUserLogin && (
                <>
                    <main className="page-content">
                        <div className="cards">
                            <div className="content">
                                <h2 className="title">Mountain View</h2>
                                <p className="copy">
                                    Check out all of these gorgeous mountain trips with beautiful views of, you guessed
                                    it, the mountains
                                </p>
                                <button className="btn">View Trips</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="content">
                                <h2 className="title">To The Beach</h2>
                                <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                                <button className="btn">View Trips</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="content">
                                <h2 className="title">Desert Destinations</h2>
                                <p className="copy">It's the desert you've always dreamed of</p>
                                <button className="btn">Book Now</button>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="content">
                                <h2 className="title">Explore The Galaxy</h2>
                                <p className="copy">Seriously, straight up, just blast off into outer space today</p>
                                <button className="btn">Book Now</button>
                            </div>
                        </div>
                    </main>
                </>
            )}
            {!checkUserLogin && (
                <ListGroup className="ListscrollY">
                    {todoList.map((data, index) => (
                        <ListGroup.Item
                            className=" mb-1"
                            variant={data.complete === true ? 'success' : 'primary'}
                            key={data.id}
                        >
                            <Row>
                                <Col xl={12} xxl={12} lg={12} md={12} xs={12} style={{ overflow: 'hidden' }}>
                                    {index + 1} - {data.title}{' '}
                                </Col>

                                {editFormVisibility === false && (
                                    <>
                                        <Col
                                            xl={2}
                                            xxl={2}
                                            lg={2}
                                            md={2}
                                            xs={2}
                                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                                        ></Col>

                                        <Col
                                            xl={2}
                                            xxl={2}
                                            lg={2}
                                            md={2}
                                            xs={2}
                                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                                        ></Col>

                                        <Col
                                            xl={2}
                                            xll={2}
                                            lg={2}
                                            md={2}
                                            xs={2}
                                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                                        ></Col>
                                    </>
                                )}
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </>
    );
};

export default memo(TodoList);
