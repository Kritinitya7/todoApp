/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItens.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
