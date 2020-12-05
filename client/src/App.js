import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fwww.facebook.com%2FISETMeme%2Fvideos%2F721666458764519%2F&show_text=false&width=560"
          width="560"
          height="373"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
