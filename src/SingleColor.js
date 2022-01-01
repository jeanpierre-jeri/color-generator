import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hex }) => {

  const [alert, setAlert] = useState(false)

  const hexValue = `#${hex}`

  const copyToClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect( () => {
    const timeout = setTimeout( () => {
      setAlert(false)
    },2000)
    return () => clearTimeout(timeout)
  }, [alert])
  
  return (
    <article onClick={copyToClipboard} className={`color ${index > 10 ? 'color-light' : null}`} style={{backgroundColor: `rgb(${rgb.join()})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      { alert && <p className='alert'>copied to clipboard</p>}
    </article>
    )
};

export default SingleColor;
