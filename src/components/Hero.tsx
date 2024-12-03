import React from 'react';
import { ArrowRight, Circuit } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-24 pb-12 px-6 bg-cyber-gradient circuit-background">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-cyber-primary glow-text">Otis Afedzie</span>
            <span className="block text-cyber-accent">BSc Computer Science Student</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 leading-relaxed">
            Crafting digital experiences through code. Exploring the intersection of technology and innovation.
          </p>
          <div className="mt-8 flex space-x-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-cyber-primary text-cyber-secondary rounded-lg hover:bg-cyber-accent transition-colors flex items-center cyber-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-cyber-primary text-cyber-primary rounded-lg hover:bg-cyber-primary/10 transition-colors cyber-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-cyber-primary shadow-lg shadow-cyber-primary/50"
            />
            <div className="absolute inset-0 rounded-full border-4 border-cyber-primary animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}