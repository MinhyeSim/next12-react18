import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
      <li className={style.li}> <Link href='/'>HOME</Link> </li>
      <li className={style.li}> <Link href='/basic/calc'>계산기</Link> </li>
      <li className={style.li}> <Link href='/basic/counter'>카운터</Link> </li>
      <li className={style.li}> <Link href='/basic/bmi'>BMI</Link> </li>
      </ul>
    </nav>
  );
};