import IMAGE from './react.png'
import SVGIMAGE from './react.svg'
import Counter from './components/counter'

export const App = () => {
  const name = "vikash singh"
  
  return (
    <>
      <h1>This is our react app {process.env.name}</h1>
      <img src={IMAGE} alt="raact logo" height={300} width={300} />
      <img src={SVGIMAGE} alt="raact logo" height={300} width={300} />
      <Counter />
    </>
  )
}

// adding eslint
// npm i -D eslint
// npm i -D eslint-plugin-react eslint-plugin-react-hooks
// npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
// create .eslintrc.js
// npm i -D eslint-plugin-import eslint-plugin-jsx-ally

// add pretiier
// eslint-confing-prettier disable eslint rule that conflicts with code formatting and eslint-plugin-prettier all prettier to define eslint rule
// npm i -D prettier eslint-confing-prettier eslint-plugin-prettier
// create .prettierrc.js

// ensure no eslint error will pushed github
// npm i -D husky lint-staged
