import { useListStore } from "../store/ListStore";

const List = ({ pro}) => {
  const {removeList, editList} = useListStore()
  const btnDelete = (id) => {
    removeList(id)
  };

  const btnEdit = (id,text)=>{
    const newText = prompt("nova tarefa:", text)
    editList(id,newText)
  }


  return (
    <div>
      <p>{pro.text}</p>
      <button onClick={() => btnDelete(pro.id)} type="button">
        XX
      </button>
      <button onClick={()=>btnEdit(pro.id, pro.text)} type="button">
        ED
      </button>
    </div>
  );
};

export default List;
