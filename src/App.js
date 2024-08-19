import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import BoardProvider from "./store/boardProvider";

function App() {
  return (
    <BoardProvider>
      <Toolbar />
      <Board />
    </BoardProvider>
  );
}

export default App;
