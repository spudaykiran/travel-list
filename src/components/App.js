//imports
import "./App.css";
import Header from "./Header.js";
import { useState } from "react";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Status from "./Status.js";

//App
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    if (items.length === 0) return;
    const confiremd = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confiremd) setItems([]);
  }
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onItemChecked={handleToggleItem}
        onClearList={handleClearList}
      />
      <Status items={items} />
    </div>
  );
}
