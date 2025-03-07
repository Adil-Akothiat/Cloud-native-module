import NavBar from "./components/navbar";
import MyRoutes from "./routes/routes";

function App() {
  return (
    <div>
      <NavBar />
      <div className="p-10">
        <MyRoutes />
      </div>
    </div>
  );
}

export default App
