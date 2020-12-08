import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Header2 from '../components/ui/Header2';
import Header3 from '../components/ui/Header3';
import Header4 from '../components/ui/Header4';
import Header5 from '../components/ui/Header5';
import Header6 from '../components/ui/Header6';
import Header7 from '../components/ui/Header7';
import Header8 from '../components/ui/Header8';
import Footer from '../components/ui/Footer';
import FooterGrid from '../components/ui/footergrid';


function App() {

  const [selectedIndex, setSelectedIndex] = useState(0); // declared index here can used more components
  const [value, setValue] = useState(0); // declared state here can used more components

  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <BrowserRouter>
        <Header8
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimation" component={() => <div>Estimation</div>} />
        </Switch>

        {[...new Array(300)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.The Last`,
          )
          .join('\n')}

        {/* <Footer /> */}
        <FooterGrid />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
