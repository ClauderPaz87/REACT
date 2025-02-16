import { useRef } from "react";

const Add = ({ dispatch, createTask }) => {
    const inputTask = useRef('');

    const btnAdd = () => {
        if (!inputTask.current.value) return;
        dispatch({ type: 'addTasks', name: inputTask.current.value });

        createTask(inputTask.current.value);
        inputTask.current.value = '';
    };

    const btnAddKey = (e) => {
        if (!inputTask.current.value) return;
        if (e === 'Enter') {
            dispatch({ type: 'addTasks', name: inputTask.current.value });

            createTask(inputTask.current.value);
            inputTask.current.value = '';
        }
    };

    return (
        <div className="input-group row d-flex justify-content-center mt-5">
            <div className="col-8 ms-5">
                <input
                    ref={inputTask}
                    onKeyDown={(e) => btnAddKey(e.key)}
                    type="text"
                    className="form-control ms-4 inputTask"
                    placeholder="Adicione uma tarefa"
                    aria-describedby="button-addon2"
                />
            </div>
            <div className="col-2">
                <button
                    onClick={btnAdd}
                    className="btn btn-outline-secondary ms-4 btnAdd"
                    type="button"
                    id="button-addon2"
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Add;