import image1 from "./assets/image/slider.jpg";
import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
  return (
    <div className="trello-master">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  );
}

export default App;
