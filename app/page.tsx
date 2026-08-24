import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <Features />
        <Categories />
        <Products />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
