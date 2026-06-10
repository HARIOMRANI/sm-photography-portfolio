import { motion, useScroll, useTransform } from 'framer-motion';

export const PortalAnimation = () => {
  const { scrollYProgress } = useScroll();
  
  // Exploded view animations
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const layerScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.5, 0]);

  return (
    <div className="relative min-h-[200vh] bg-pitchblack overflow-hidden flex flex-col items-center">
      
      {/* Sticky Portal Container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden perspective-[1000px]">
        
        {/* Deep background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[60vw] rounded-full bg-gold/5 blur-[120px]" />
        </div>

        {/* Text Behind */}
        <motion.div 
          className="absolute z-0 flex flex-col items-center justify-center"
          style={{ opacity: scrollYProgress }}
        >
          <h2 className="font-headline text-5xl md:text-8xl text-white text-center tracking-tighter">
            The Lens <br/>
            <span className="text-gold italic font-light">Revealed</span>
          </h2>
        </motion.div>

        {/* Exploding Camera Layers */}
        <motion.div 
          className="relative z-10 w-[280px] h-[280px] md:w-[500px] md:h-[500px] flex items-center justify-center"
          style={{ scale: layerScale }}
        >
          {/* Back element of lens */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-charcoal bg-pitchblack/80 backdrop-blur-md shadow-[inset_0_0_50px_rgba(42,42,42,0.8)] flex items-center justify-center"
            style={{ y: layer2Y }}
          >
             <div className="w-[40%] h-[40%] rounded-full border border-charcoal bg-black shadow-[0_0_30px_rgba(212,175,55,0.1)]" />
          </motion.div>
          
          {/* Middle element (glass) */}
          <motion.div 
            className="absolute inset-[10%] rounded-full border border-gold/30 bg-gold/5 backdrop-blur-lg flex items-center justify-center"
            style={{ opacity }}
          >
            <div className="w-[80%] h-[80%] rounded-full border border-bronze/40 bg-pitchblack/40 shadow-[inset_0_0_40px_rgba(128,96,49,0.3)]" />
          </motion.div>

          {/* Front element (aperture) */}
          <motion.div 
            className="absolute inset-[20%] rounded-full border-2 border-charcoal bg-gradient-to-tr from-pitchblack to-[#1a1a1a] shadow-2xl flex items-center justify-center overflow-hidden"
            style={{ y: layer1Y }}
          >
             <div className="w-[60%] h-[60%] rounded-full bg-pitchblack shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]" />
             {/* Simulated reflections */}
             <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-white/5 rotate-45 pointer-events-none" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rotate-12 pointer-events-none blur-md" />
          </motion.div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50 font-mono text-xs tracking-widest uppercase flex flex-col items-center gap-2 animate-bounce pointer-events-none">
        <span>Scroll to Explode</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </div>
  );
};
