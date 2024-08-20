import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/boardProvider";
import ToolBoxProvider from "./store/ToolboxProvider";

function App() {
  return (
    <BoardProvider>
      <ToolBoxProvider>
        <Toolbar />
        <Board />
        <Toolbox />
      </ToolBoxProvider>
    </BoardProvider>
  );
}

export default App;