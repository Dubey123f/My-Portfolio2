// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Skills from './components/Skills';
// import Works from './components/Works';
// import edu from './components/edu';

// function App() {
//   return (
//     <div >
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Works />
//       <Contact />
//       <edu/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Edu from './components/Edu'// Assuming your component is named 'Edu'
 
// import Down from './components/down';

import Experience from './components/experience';
import Footer from './components/footer';
function App() {
  return (
    <div>
        {/* <Down/> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Edu /> {/* Include the Edu component here */}
      <Experience />
      <Contact />
      <Footer />
    
    

    </div>
  );
}

export default App;
