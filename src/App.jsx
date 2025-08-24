import './App.css'

function App() {

  // 1. Skapa en egen komponent
  function MyComponent() {
    return <p>Hello from a new component!</p>
  }

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App
