"use client"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="HomeContainer ">
             
      {/* Navbar component */}
      <Navbar></Navbar>  

       {/* this is the hero Section */}
       <HeroSection></HeroSection>
      
      
      <div className="bg-yellow-600 h-[800px]  ">hello</div> 
     
    

  
    </div>
  );
}
