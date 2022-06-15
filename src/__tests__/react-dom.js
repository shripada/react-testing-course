import React from 'react'
// import ReactDOM from 'react-dom'
// import {getQueriesForElement} from '@testing-library/dom'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

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

test('typing a value outside of range, should show the alert message, and if inside no alert message', () => {
  const {rerender} = render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  user.type(input, '10')
  //screen.debug()
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  rerender(<FavoriteNumber max={11} />)
  //screen.debug()
  // this wont work, as getByRole will throw if the element is not found
  //expect(screen.getByRole('alert')).toBeNull()

  // This too is not recommended. you will get an error while validation (this runs as pre commit hook)
  //expect(screen.queryByRole('alert')).toBeNull()

  //Prefer .toBeInTheDocument() for asserting DOM node existence
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
})
