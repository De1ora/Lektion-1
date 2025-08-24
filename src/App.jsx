import './App.css'

  // 1. Skapa en egen komponent
  function MyComponent() {
    return <p>Hello from a new component!</p>
  }

  // 2. Skapa en egen komponent
  function LoveReact() {
    return <p>I love React!</p>
  }


function App() {
  return (
    <>
      <MyComponent />
      <LoveReact />
    </>
  )
}

export default App
