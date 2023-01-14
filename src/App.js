
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/icons8-react-native-240.png';
import LoginForm from './components/LoginForm/LoginForm';
import Signup from './components/Signup/Signup';
import SocialMediaLogin from './components/SocialMediaLogin/SocialMediaLogin';



function App() {

  const [formFilter, setFormFilter] = useState("login");

  return (
    <div className="App">

      <section className='main-section'>

        <section className='heading'>
          <img src={reactLogo} alt="React icon" width="150" height="150" />
          <h4>Lorem ipsum dolor sit amet <br /> consectetur  adipisicing elit Magni ex.</h4>
        </section>




        <section>
          <div className='navigators'>
            <p id='login-navigator' className='navigators-active' onClick={()=> setFormFilter('login')}>Login</p>
            <p id='signup-navigator' onClick={()=> setFormFilter('signup')}>Signup</p>
          </div>
        </section>

        {
          formFilter === 'login' && <LoginForm></LoginForm>
        }

        {
          formFilter === 'signup' && <Signup></Signup>
        }


        <p className='divider'>or login with</p>

        <SocialMediaLogin></SocialMediaLogin>

        <p className='hot-signup'>Don't have an account? <a href="#">Create new now!</a> </p>
        <p className='termsAndConditions'>By signing up, you are agree with our <a href="#"> Terms & Conditions</a></p>



      </section>

    </div>
  );
}

export default App;
