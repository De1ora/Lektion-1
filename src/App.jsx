import './App.css'

// 1. Skapa en egen komponent
function MyComponent() {
  return ( // Parentesen tillkommer pga radbrytning. Vanliga JS-kommentarer fungerar utanför JSX.
    <> {/* Eftersom MyComponent nu retunerar två element, måste de wrappas som ett element med <> */}
    <h3>Hello from a new component!</h3>
    <SubComponent />
  </>
  )
}

// 2. Skapa en egen komponent
function LoveReact() {
  return <p>I love React!</p>
}

// 3. Skapa en sub-komponent
function SubComponent() {
  return <p>This is a sub-component</p>
}

// 4. Skapa en komponent som slumpar ett tal
function RandomNumber() {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    return <p>I like dogs!</p>
  } else if (randomNumber < 0.5) {
    return <p>I like cats!</p>
  } else if (randomNumber == 0.5) {
    return <p>I like cats and dogs!</p>
  }
}

// 5. Fixa alla fel
function MyErroredComponent() {
  return <div>Hello World!</div>;
}

// 7. Följande kod innehåller ett eller flera fel. Peka ut dem:

/* 

const appDescription = "Welcome to my app.";

function App() {
  const appTitle = "My first app!";
  return (
  <>
  <h1>appTitle</h1>
  <p>{appdescription}</p>
  </>
  );
} 

*/

// 1. appDescription är definierad utanför App-komponenten, och är därför inte åtkomlig.
// 2. <h1>appTitle</h1> kallar inte på variablens värde, utan skriver ut texten "appTitle".
// 3. Utöver att appDescription är definierad utanför App-komponenten, så är den felstavad i <p>{appdescription}</p>.

// 8. Fixa alla fel

/*
function title() {
  return <h1>Welcome to my app!</h1>;
}

function App() {
  return <title>;
}
*/

// 1. React komponenter måste börja med en stor bokstav. function title måste ändras till function Title().
// 2. <title> kan inte retuneras i App. Istället borde <Title /> returneras.

function App() {
  return (
    <>
      <MyComponent />
      <LoveReact />
      <RandomNumber />
      <MyErroredComponent />
    </>
  )
}

export default App
