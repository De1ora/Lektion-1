import './App.css'

// 10. Sortera och lägg in
// Följande kod innehåller population data på några länder i en array. Gör så att data visas upp i tabellen 
// sorterad på population. Mest population går högst upp i tabellen och minst går längst ned. Det visas ett 
// hårdkodat exempel med Frankrike som ska tas bort. Raderna (i tabellen) skall komma från arrayen och skall 
// inte hårdkodas.

// Hints: Använd måsvingar och array-.map funktionen.

class Country {
  constructor(name, continent, population) {
    this.name = name;
    this.continent = continent;
    this.population = population;
  }
}

function App() {
  const countries = [
    new Country("Germany", "Europe", 84748242),
    new Country("Sweden", "Europe", 10278577),
    new Country("Japan", "Asia", 123335513),
    new Country("China", "Asia", 1425626240),
    new Country("Spain", "Europe", 47835532),
    new Country("Brazil", "South America", 216529996),
    new Country("Canada", "North America", 38818002),
  ];

  return (
    <div>
      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
          <th>Population</th>
        </tr>
        {/* JavaScript går igenom listan med länder och frågar: Ska detta landet komma före detta? */}
        {countries.sort((a, b) => b.population - a.population).map((country) => (
          <tr key={country.name}>
            <td>{country.name}</td>
            <td>{country.continent}</td>
            <td>{country.population}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;