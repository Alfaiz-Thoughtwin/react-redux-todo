import React, { useState } from 'react';

const App = () => {

  const [text, setText] = useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="text-center my-4">
          <h1>React ToDo With Redux</h1>
        </div>

        <div className="text-center row my-4">
          <div className="col-md-3"></div>
            <div className="col-md-6">
              <form className="form form-control p-4">
                <div className="mb-3">
                  <label htmlFor="todoText" className="form-label"><strong>Todo Detail</strong></label>
                  <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="form-control" id="todoText" name="todoText" autoComplete="off" />
                </div>
                <button type="button" className="btn btn-dark" style={{width: '20%'}}>Add</button>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
      </div>
    </>
  );
}

export default App;