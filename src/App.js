import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      
    <Navbar title = "TextUtils" abouttextUtils = "About TextUtils" />
    {/* <Navbar /> */}
    <div className="container my-3">
    <TextForm heading = "Enter Your Text To Analyze"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
