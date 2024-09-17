import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialItemValue) {
  const [item, setItem] = useState(initialItemValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialItemValue));
          parsedItem = initialItemValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  console.log(item);

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage };

// localStorage.removeItem('TASKS_V1');
// const defaultTasks = [
//   {text: 'Estudiar',completed: false},
//   {text: 'Buscar empleo',completed: false},
//   {text: 'Limpiar jardín',completed: true},
//   {text: 'Suscribirse a Platzi',completed: true},
// ];
// localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));