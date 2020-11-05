import React from 'react'

const Header = ({ title, big }) => (
  <h2>{title}</h2>
)

const Content = ({ parts }) => (
  parts.map(part =>
    <Part key={part.id} part={part} />
  )
)

const Part = ({ part }) => (
  <p> {part.name} {part.exercises}</p>
)

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, part) => (acc + part.exercises), 0)
  return(
    <p><b>Total of {sum} exercises</b></p>
  )
}

const Course = ({ course }) => (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
)

export default Course
