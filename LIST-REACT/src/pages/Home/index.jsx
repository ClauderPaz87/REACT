import { useRef } from "react";
import List from "../../components/List/";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useListStore } from "../../store/ListStore";
import "./style.css";

function Home() {
  const {list,addList} = useListStore()
  const inputRef = useRef("");

  const btnAdd = () => {
    addList(inputRef.current.value)
  };

  return (
    <div>
      <div>
        <h1 className="bg-blue">Lista de Compra</h1>
        <p>
          <input type="text" ref={inputRef} />{" "}
          <button onClick={btnAdd} type="button">
            Adicionar
          </button>
        </p>
      </div>

      {list.map((l)=>
        <List key={l.id} pro={l} />
      )}
    </div>
  );
}

export default Home;
