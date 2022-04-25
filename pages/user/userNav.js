import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
      <li className={style.li}> <Link href='/'>HOME</Link> </li>
      <li className={style.li}> <Link href='/user/login'>로그인</Link> </li>
      <li className={style.li}> <Link href='/user/logout'>로그아웃</Link> </li>
      <li className={style.li}> <Link href='/user/join'>회원가입</Link> </li>
      <li className={style.li}> <Link href='/user/getUsers'>사용자목록</Link> </li>
      <li className={style.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li>
      </ul>
    </nav>
  );
};