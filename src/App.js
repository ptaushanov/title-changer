import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);

  useEffect(()=>{
    document.title = `Count (${count})`;
  }, [count])


  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <button onClick={setCount.bind(null, count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
