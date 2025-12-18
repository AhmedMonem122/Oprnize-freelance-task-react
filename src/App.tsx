import "./App.css";
import AddCompany from "./components/AddCompany/AddCompany";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <AddCompany />
    </>
  );
}

export default App;
