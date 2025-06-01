import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Learn React Series"

// const reactElement = React.createElement(
//     'a',
//     {href:'https://google.com', target:'_blank' },
//     'click me to visit google',
//     anotherUser
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  
  </StrictMode>,

  // reactElement

)
  