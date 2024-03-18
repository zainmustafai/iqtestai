
import Navbar from './components/Navbar'
import NewsLetterSection from './components/newsLetterSection/NewsLetterSection';


const navItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Start Test",
    url: "/starttest"
  },
  {
    title: "Check Certificate",
    url: "/check-cert"
  },
  {
    title: "Pro Pricing",
    url: "/pro"
  }
];

function App() {

  return (
    <>
      <Navbar navItems={navItems} />
      <NewsLetterSection />
    </>
  )
}

export default App
