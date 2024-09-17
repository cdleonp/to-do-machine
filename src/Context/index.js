import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TaskContext = createContext();

function TaskProvider({ children }) {
    //Aquí se puede encapsular lógica/información que se comparte entre varios niveles de componentes
    const {
        item: tasks,
        saveItem: saveTasks,
        loading,
        error,
    } = useLocalStorage('TASKS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    // console.log(`Search value: ${searchValue}`);

    const regex = new RegExp(searchValue, 'i'); // 'i' flag for case-insensitive search
    // console.log(`Regex: ${regex}`);

    const filteredTasks = tasks.filter(taskObject => regex.test(taskObject.text));
    // console.log(`Filtered tasks: ${JSON.stringify(filteredTasks)}`);

    const completedTasks = filteredTasks.filter(task => task.completed).length;
    const totaltasks = filteredTasks.length;

    const toggleCompleteTask = text => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(task => task.text === text);
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        console.log(`Updated tasks: ${JSON.stringify(newTasks)}`);
        saveTasks(newTasks);
    }

    const addNewTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
            text,
            completed: false,
        });
        saveTasks(newTasks);
    }
    const deleteTask = text => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(task => task.text === text);
        newTasks.splice(taskIndex, 1);
        console.log(`Updated tasks: ${JSON.stringify(newTasks)}`);
        saveTasks(newTasks);
    }

    const toggleOpen = () => setOpenModal(!openModal);

    return (
        // value para exponer todos los métodos, variables, estados y demás disponibles
        <TaskContext.Provider value={{
            loading,
            error,
            completedTasks,
            totaltasks,
            searchValue,
            setSearchValue,
            filteredTasks,
            toggleCompleteTask,
            deleteTask,
            openModal,
            setOpenModal,
            toggleOpen,
            addNewTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider };