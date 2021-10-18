import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,deleteTodo,removeTodo } from '../../redux/actions/index';

export const Todo = () => {

    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducers.list);

    const [inputData, setInputData] = useState("");

    const handleAdd = (event) => {
        event.preventDefault();
        dispatch(addTodo(inputData),setInputData(''));
    };

    return (
        <>
            <div className="text-center my-4">
                <h1>React ToDo With Redux</h1>
            </div>

            <div className="text-center row my-4">
                <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form form-control p-4" style={{backgroundColor: 'lightgrey'}}>
                            <div className="mb-3">
                                <label htmlFor="todoText" className="form-label"><strong>Add Your List Here...</strong></label>
                                <input value={inputData} onChange={(event)=>setInputData(event.target.value)} type="text" placeholder="✍️ Add Items..." className="form-control" id="todoText" name="todoText" autoComplete="off" />
                            </div>
                            <button type="button" onClick={(event)=>handleAdd(event)} className="btn btn-dark mx-4" style={{width: '20%'}}>Add</button>
                            <button type="button" onClick={()=>dispatch(removeTodo())} className="btn btn-warning" style={{width: '20%'}}>Delete All</button>
                        </div>
                    </div>
                <div className="col-md-3"></div>
            </div>

                {
                    list && 
                    list.map((elem) => {
                        return (
                            <div key={elem.id} className="text-center row my-2">
                                <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <div className="form form-control p-4" style={{backgroundColor: 'lightgrey'}}>
                                            <div className="mb-3">
                                                <h3>{ elem.data }</h3>
                                                <button type="button" onClick={()=>dispatch(deleteTodo(elem.id))} className="btn btn-sm btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-md-3"></div>
                            </div>
                        )
                    })
                }
        </>
    )
}
