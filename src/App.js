import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="bb137e43-b49e-4dc4-a34f-ea433f83baa5"
        userName="Aman"
        userSecret="12345"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine.s3.amazonaws.com/click.mp3")
        }
      />
    </div>
  );
}

export default App;
