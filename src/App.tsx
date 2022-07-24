import Button from "./components/Button";
import ContactList from "./components/ContactList";
import { AppProvider } from "./context/AppProvider";
import GlobalStyles from "./utils/GlobalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <ContactList />
      <Button />
    </AppProvider>
  );
}

export default App;
