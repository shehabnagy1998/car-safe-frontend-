import React, { memo, useState, useEffect } from 'react';
import './App.scss';

const App = props => {

  let [count, setCount] = useState(1);

  useEffect(_ => {
    console.log('rendered');
    return _ => {
      console.log('unmounting');
    }
  }, []);

  return (
    <article className="container-fluid main-content">

      {/* <img src={img} className="back-img" /> */}

      <div className="row App">

        <div className="col-md-6 content">
          <button
            onClick={e => setCount(++count)}
            className="btn btn-primary">increament</button>
          <label>count is {count}</label>
        </div>

        <div className="col-md-6 bg-primary">
        </div>

      </div>
    </article>
  );

}

export default memo(App);