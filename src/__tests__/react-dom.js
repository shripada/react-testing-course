import React from 'react'
// import ReactDOM from 'react-dom'
// import {getQueriesForElement} from '@testing-library/dom'
import {render, screen} from '@testing-library/react'

// import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'
//expect.extend({toHaveAttribute})

// test('renders a number input with a label "Favorite Number"', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<FavoriteNumber />, div)
//   expect(div.querySelector('input').type).toBe('number')
//   expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
// })

// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   const {getByLabelText} = getQueriesForElement(container)
//   return {container, ...queries}
// }

test('renders an input with a label "Favourite Number"', () => {
  //const {getByLabelText, debug}  =  render(<FavoriteNumber />)
  render(<FavoriteNumber />)
  //screen.debug()
  const input = screen.getByLabelText(/favorite number/i)
  //screen.debug(input)
  expect(input).toHaveAttribute('type', 'number')
})
