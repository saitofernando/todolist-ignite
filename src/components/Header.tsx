import logoTodoList from "../assets/logo-todo-list.svg"
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodoList} />
    </header>
  )
}