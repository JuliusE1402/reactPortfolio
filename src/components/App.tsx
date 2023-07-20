import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import "./css/App.css";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
