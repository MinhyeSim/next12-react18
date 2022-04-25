import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>HOME</Link> </li>
        <li className={style.li}> <Link href='/todo/addTodo'>투두추가</Link> </li>
        <li className={style.li}> <Link href='/todo/getTodos'>투두목록</Link> </li>
        <li className={style.li}> <Link href='/todo/modifyTodo'>투두수정</Link> </li>
        <li className={style.li}> <Link href='/todo/removeTodo'>투두삭제</Link> </li>
      </ul>
    </nav>
  );
};