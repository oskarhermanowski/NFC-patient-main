import "./styles.css";
import { ReadTagComponent } from "./components/Nfcs/ReadTagComponent";
import NavComponent from "./components/Nav/NavComponent";

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <NavComponent />
        <ReadTagComponent />
      </form>
    </>
  );
}
