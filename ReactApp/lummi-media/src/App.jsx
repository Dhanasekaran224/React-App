import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import BlogPost from "./components/BlogPost";
import Button from "./components/Button";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Driving Growth with Data-Driven Marketing</h1>
      <p>
        Luumi Media is your partner in success, offering tailored digital
        marketing solutions that boost visibility, engagement, and conversions.
      </p>
      <Button text="Get a Free Consultation" onClick={() => alert("Consultation Requested")} />
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        At Luumi Media, we bring expertise in SEO, digital marketing, branding,
        and lead generation. Our team of specialists helps businesses grow
        through innovative strategies and technology-driven solutions.
      </p>
      <ul>
        <li>Data-Driven Strategies</li>
        <li>Customized Marketing Solutions</li>
        <li>Proven Track Record</li>
      </ul>
    </div>
  );
}

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ServiceCard
        title="SEO Services"
        description="On-Page SEO, Off-Page SEO, Technical SEO, and Local SEO Optimization."
      />
      <ServiceCard
        title="Digital Marketing"
        description="Performance Marketing, Social Media Marketing, Content Creation, and Email Marketing."
      />
      <ServiceCard
        title="Branding & Web Development"
        description="Website Design & Development, Sales Funnel Creation, and Logo & Brand Identity."
      />
      <ServiceCard
        title="Paid Advertising"
        description="Google Ads, Social Media Ads, and Retargeting Campaigns."
      />
    </div>
  );
}

function Blog() {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <BlogPost
        title="The Importance of On-Page SEO for Your Business"
        content="On-page SEO is a crucial element in improving website rankings and driving organic traffic. Key components include optimized title tags, keyword usage, URL structure, image optimization, internal linking, mobile-friendliness, and page speed optimization."
      />
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <Button text="Submit" onClick={() => alert("Message Sent")} />
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;