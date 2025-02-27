"use client"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="HomeContainer ">
      
      {/* this is the hero Section */}
      <HeroSection></HeroSection>
           
      {/* Navbar component */}
      <Navbar></Navbar>     


    </div>
  );
}
