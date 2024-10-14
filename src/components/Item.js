export default function Item({ item, onDeleteItem, onItemChecked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.pacfcked}
        onChange={() => onItemChecked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
