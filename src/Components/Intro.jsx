import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SVGComponent from "./Icon";

const IntroPage = () => {
  const slides = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover Amazing Places",
      description: "Explore diverse destinations and create unforgettable memories.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Plan Your Journey",
      description: "Effortlessly plan your trip with personalized itineraries.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1590086787339-4c6ec74efb00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Generate Your Plan Using AI",
      description: "Experience the future of travel planning with our AI-powered itinerary generator.",
    },
    // Add more slides as needed
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", duration: 1, delay: index * 0.5 }}
          >
            <nav className="bg-white text-blue-500 p-4 w-full fixed top-0">
              <div className="container mx-auto">
                <Link to="/" className="text-lg font-bold">
                  Home
                </Link>
                {/* Add more navigation links as needed */}
              </div>
            </nav>

            <div className="text-white text-center">
              <SVGComponent className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-8">{slide.description}</p>
              {slide.id === 3 && (
                <Link
                  to="/plan"
                  className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-200"
                >
                  Plan Your Journey
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IntroPage;
