import Hero from './components/Hero'
import About from './components/About'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <h1
        className="text-4xl font-bold font-circular
  text-violet-300 bg-blue-50 text-center py-3"
      >
        Wheeler Knight | <i>SWD</i> Intern
      </h1>
      <Hero />
      <section className="z-0 min-h-20vh bg-blue-75" />
      <About />
    </main>
  )
}

export default App
