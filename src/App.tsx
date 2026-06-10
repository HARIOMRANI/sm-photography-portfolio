import { useState } from 'react';
import { HeroEdition } from './screens/HeroEdition';
import { PortalAnimation } from './screens/PortalAnimation';
import { CustomCursor } from './components/CustomCursor';
import { Button } from './components/Button';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'hero' | 'portal'>('hero');

  return (
    <>
      <CustomCursor />
      
      {/* Navigation for demo purposes */}
      <div className="fixed top-6 right-6 z-[999] flex gap-4 mix-blend-difference">
        <Button 
          variant={currentScreen === 'hero' ? 'primary' : 'ghost'} 
          onClick={() => setCurrentScreen('hero')}
          className="py-2 px-4 text-xs bg-white text-black hover:bg-gold hover:text-black"
        >
          Hero Edition
        </Button>
        <Button 
          variant={currentScreen === 'portal' ? 'primary' : 'ghost'} 
          onClick={() => setCurrentScreen('portal')}
          className="py-2 px-4 text-xs bg-transparent border-white text-white hover:border-gold hover:text-gold hover:bg-gold/10"
        >
          Portal Animation
        </Button>
      </div>

      <main className="w-full bg-pitchblack min-h-screen relative z-0">
        {currentScreen === 'hero' && <HeroEdition />}
        {currentScreen === 'portal' && <PortalAnimation />}
      </main>
    </>
  );
}

export default App;
