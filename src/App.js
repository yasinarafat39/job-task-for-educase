
import './App.css';
import reactLogo from './assets/icons8-react-native-240.png';
import LoginForm from './components/LoginForm/LoginForm';
import SocialMediaLogin from './components/SocialMediaLogin/SocialMediaLogin';

function App() {
  return (
    <div className="App">

      <section className='main-section'>

        <section className='heading'>
          <img src={reactLogo} alt="React icon" width="150" height="150" />
          <h4>Lorem ipsum dolor sit amet <br /> consectetur  adipisicing elit Magni ex.</h4>
        </section>

        <div className='navigators'>
          <p id='login-navigator'>Login</p>
          <p id='signup-navigator'>Signup</p>
        </div>

        <LoginForm></LoginForm>

        <p className='divider'>or login with</p>

        <SocialMediaLogin></SocialMediaLogin>

        <p className='hot-signup'>Don't have an account? <a href="#">Create new now!</a> </p>
        <p className='termsAndConditions'>By signing up, you are agree with our <a href="#"> Terms & Conditions</a></p>



      </section>

    </div>
  );
}

export default App;
