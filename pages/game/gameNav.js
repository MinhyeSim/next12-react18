import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
      <li className={style.li}> <Link href='/'>HOME</Link> </li>
      <li className={style.li}> <Link href='/game/addgame'>게임 등록</Link> </li>
      <li className={style.li}> <Link href='/game/getGames'>게임 목록</Link> </li>
      <li className={style.li}> <Link href='/game/modifyGame'>게임 수정</Link> </li>
      <li className={style.li}> <Link href='/game/removeGame'>게임 삭제</Link> </li>
      <li className={style.li}> <Link href='/game/addTeam'>팀 등록</Link> </li>
      <li className={style.li}> <Link href='/game/getTeams'>팀 목록</Link> </li>
      <li className={style.li}> <Link href='/game/modifyTeam'>팀 수정</Link> </li>
      <li className={style.li}> <Link href='/game/removeTeam'>팀 삭제</Link> </li>
      </ul>
    </nav>
  );
};