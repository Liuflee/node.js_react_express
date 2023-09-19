import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = ({ course }) => <h1>{course}</h1>

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

const Total = ({ exercises }) => <p>Number of exercises {exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <p>
        <Content part = {part1} exercises = {exercises1} />
      </p>
      <p>
        <Content part = {part2} exercises = {exercises2} />
      </p>
      <p>
        <Content part = {part3} exercises = {exercises3} />
      </p>
      <p> <Total exercises = {exercises1 + exercises2 + exercises3} /></p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)