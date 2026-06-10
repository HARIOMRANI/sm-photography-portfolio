import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { GlassChip } from '../components/GlassChip';
import { PhotographyCard } from '../components/PhotographyCard';

export const HeroEdition = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Editorial', 'Portrait', 'Macro', 'Cinematic'];
  
  const portfolio = [
    { id: 1, title: 'Obsidian Reflections', category: 'Macro', src: '/assets/camera_lens.png' },
    { id: 2, title: 'Midnight Velvet', category: 'Editorial', src: '/assets/fashion_portrait.png' },
    { id: 3, title: 'Golden Hour Details', category: 'Macro', src: '/assets/macro_gold.png' },
  ];

  const filteredPortfolio = activeCategory === 'All' ? portfolio : portfolio.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-pitchblack text-white px-6 md:px-20 py-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-32 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-gold font-mono tracking-[0.2em] uppercase text-sm">SM Photography</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl tracking-tighter">
            Capturing light in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-bronze">absolute darkness.</span>
          </h1>
          <p className="font-body text-[#d0c5af] text-lg max-w-xl mt-6">
            A premium portfolio showcasing high-end cinematic and editorial photography. Light refraction, precision, and timeless elegance.
          </p>
          <div className="flex gap-4 mt-8">
            <Button variant="primary">Explore Gallery</Button>
            <Button variant="ghost">Contact Atelier</Button>
          </div>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <GlassChip
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolio.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <PhotographyCard
              title={item.title}
              category={item.category}
              imageSrc={item.src}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
