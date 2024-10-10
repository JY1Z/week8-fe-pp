import AuthProvider from "./context/AuthProvider";
import ThemeProvider from "./context/ThemeProvider";
import Main from "./pages/Main";
const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        {/* main wrapped separately like this to ensure ThemeProvider works as intended*/}
        <Main />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;