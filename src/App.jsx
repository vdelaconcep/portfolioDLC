import '@/style.css';

import Home from "@/sections/home";
import SobreMi from "@/sections/sobreMi";
import FullStack from '@/sections/fullStack';
import Uxui from '@/sections/uxui';
import Contacto from '@/sections/contacto';
import Divisor from '@/components/divisor';

function App() {

  return (
    <>
      <Home />
      <Divisor />
      <SobreMi />
      <Divisor />
      <FullStack />
      <Divisor />
      <Uxui />
      <Divisor />
      <Contacto />
    </>
  )
}

export default App
