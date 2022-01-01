import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

const App = () => {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    
    e.preventDefault()

    try {

      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} >
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
          <button className='btn'>Submit</button>

        </form>
      </section>
      <section className="colors">
        {
          list.map( (color, index) => {
            console.log(color)
            return (
              <SingleColor {...color} key={index} index={index} hex={color.hex} />
            )
          })
        }
      </section>
    </>
  )
};

export default App;
