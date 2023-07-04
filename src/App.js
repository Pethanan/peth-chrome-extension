import { Provider, useDispatch } from "react-redux";
import "./App.css";
import ChatBox from "./components/chatbox/ChatBox";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <ChatBox />
    </div>
  );
}

export default App;
