import GameSubmitForm from './containers/game-submit-form'
import UnityLogo from './assets/images/unity-masterbrand-black.png';
import './App.css';

const App = () => {
  return (
    <>
    <img className="App-logo" alt="unity logo" src={UnityLogo} width='200' />
    <GameSubmitForm />

    </>
  );
};

export default App;
