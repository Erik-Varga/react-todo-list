import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import List from '../components/List'
import Alert from '../components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return []
  }
}

const IndexPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name, date: new Date() }
          }
          return item
        })
      );
      setName("");
      setDate("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Task updated")
    } else {
      showAlert(true, "success", "Task added")
      const newItem = { id: new Date().getTime().toString(), title: name, date: new Date() };
      setList([...list, newItem]);
      setName("");
      setDate("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
    setDate()
  };
  const clearList = () => {
    showAlert(true, "danger", "List Cleared");
    setList([]);
  };

  return (
    <div className='text-center text-sm border border-gray-400 dark:border-gray-600 p-15 rounded'>

      <div className="text-2xl mb-3">
        <Title text1={'TO-DO'} text2={'APP'} />
      </div>

      <div className='my-5 bg-gray-200 dark:bg-gray-800'>
        {list.length} {list.length === 1 ? "Task" : "Tasks"}
      </div>

      <section className="section-center">
        <form
          onSubmit={handleSubmit}
          className='w-full'
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-gray-900 dark:text-gray-100 mb-8 rounded placeholder:text-gray-600 dark:placeholder:text-gray-400"
            placeholder='What task do you have today?'
          />

          <button type="submit" className='bg-gray-700 dark:bg-gray-300 border-none p-2 text-gray-100 dark:text-gray-900 rounded ml-2 cursor-pointer'>{isEditing ? "Edit" : "Add"} Task</button>
        </form>

        <div className="text-left h-5 font-bold text-red-500 uppercase">
              {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
            </div>

        {list.length > 0 && (
          <div className='mt-5'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <div className="text-center">
              <button onClick={clearList} className='bg-gray-700 dark:bg-gray-300 border-none p-2 text-gray-100 dark:text-gray-900 rounded m-5 cursor-pointer'>Clear</button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default IndexPage