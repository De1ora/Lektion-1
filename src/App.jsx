import './App.css'

// 1. Skapa en egen komponent
function MyComponent() {
  return ( // Parentesen tillkommer pga radbrytning. Vanliga JS-kommentarer fungerar utanför JSX.
    <> {/* Eftersom MyComponent nu retunerar två element, måste de wrappas som ett element med <> */}
    <p>Hello from a new component!</p>
    <SubComponent />
  </>
  )
}

// 2. Skapa en egen komponent
function LoveReact() {
  return <p>I love React!</p>
}

function SubComponent() {
  return <p>This is a sub-component</p>
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
