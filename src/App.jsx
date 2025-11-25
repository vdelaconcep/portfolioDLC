import '@/style.css';
import { LanguageProvider } from '@/context/langContext';
import { MobileProvider } from '@/context/mobileContext';

import Home from "@/sections/home";
import SobreMi from "@/sections/sobreMi";
import FullStack from '@/sections/fullStack';
import Uxui from '@/sections/uxui';
import Contacto from '@/sections/contacto';
import Divisor from '@/components/divisor';

function App() {

  return (
    <>
      <MobileProvider>
        <LanguageProvider>
          <Home />
          <Divisor />
          <SobreMi />
          <Divisor />
          <FullStack />
          <Divisor />
          <Uxui />
          <Divisor />
          <Contacto />
        </LanguageProvider>
      </MobileProvider>
    </>
  )
}

export default App
