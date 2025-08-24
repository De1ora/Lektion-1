import './App.css'

// 9. Struktur för webbsida 
// Skapa komponenter som bygger upp strukturen för en webbsida. Sidan ska innehålla: header, 
// navbar, sidebar, main-content och footer. Komponenterna behöver inte ha något innehåll men 
// ska länkas i App komponenten.

function Header() {
  return <header>Header</header>
}

function Navbar() {
  return <nav>Navbar</nav>
}

function Sidebar() {
  return <aside>Sidebar</aside>
}

function MainContent() {
  return <main>Main Content</main>
}

function Footer() {
  return <footer>Footer</footer>
}

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

export default App