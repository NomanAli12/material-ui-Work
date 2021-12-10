import Header from "./component/ui/Header";
import {  ThemeProvider } from '@material-ui/core/styles';
import theme from "./component/ui/Theme";
import {BrowserRouter , Route , Switch } from 'react-router-dom';
// import PlayerCart from "./component/ui/playerCart";
import Footer from "./component/ui/Footer";
import LandingPage from "./component/LandingPage";
import Services from "./component/ui/Services";
import CustomSoftware from "./component/ui/CustomSoftware";


function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
       <Header /> 
       
       {/* <PlayerCart /> */}
      <Switch>
        <Route exact path= "/" component ={LandingPage} />
        <Route exact path= "/services" component ={Services} />
        <Route exact path= "/customsoftware" component ={CustomSoftware} />
        <Route exact path= "/mobileapps" component ={()=> <div>Mobile Apps</div>} />
        <Route exact path= "/contactus" component ={()=> <div>contact Us</div>} />
        <Route exact path= "/estimate" component ={()=> <div>Estimate</div>} />
      </Switch>
      <Footer /> 
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
