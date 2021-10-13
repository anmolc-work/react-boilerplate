import './App.css';
import ClickCounter from './components/ClickCounter';
import ErrorBoundary from './components/ErrorBoundary';
import FavColor from './components/FavColor';
import Greet from './components/greet';
import HoverCounter from './components/HoverCounter';
import Status from './components/Status';
import Students from './components/Students';
import { UserProvider } from './components/UserContext';
import Welcome from './components/Welcome';
import User from './components/User';
import Assets from './helpers/Assets';
import MyForm from './components/MyForm';

const App = () => {

  return (
    <div>
      {/* <img style={{ width: "400px", height: "200px" }} src={Assets.Image1} alt={'Image1'} />
      <Greet user={'Anmol'} />
      <Welcome>
        <div>Welcome Suhas</div>
      </Welcome>
      <ClickCounter user={'Anmol'} />
      <HoverCounter user={'Suhas'} />
      <Students />
      <Status />
      <ErrorBoundary>
        <FavColor color={'yellow'} />
      </ErrorBoundary>
      <UserProvider value="Good Afternoon">
        <User />
      </UserProvider> */}
      <MyForm />
      <FavColor color={'yellow'} />
    </div>
  );
}

export default App;
