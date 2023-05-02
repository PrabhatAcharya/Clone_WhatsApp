import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId =
    "231854909008-454dm4u5uqas790jr7njvqhr1ud4e8qj.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
