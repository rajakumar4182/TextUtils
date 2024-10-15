import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title ='TextUtils' aboutText='About TextUtils'/>
      {/* <Navbar title ='TextUtils'/>  -- if we don't pass aboutText then value is being fetched through default Props which is written in Navbar.js*/}
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below"/>
      </div>
    </>
    
  );
}

export default App;
