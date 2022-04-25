import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
      <li className={style.li}> <Link href='/'>HOME</Link> </li>
      <li className={style.li}> <Link href='/board/addArticle'>게시글 등록</Link> </li>
      <li className={style.li}> <Link href='/board/getArticles'>게시글 목록</Link> </li>
      <li className={style.li}> <Link href='/board/modifyArticle'>게시글 수정</Link> </li>
      <li className={style.li}> <Link href='/board/removeArticle'>게시글 삭제</Link> </li>
      </ul>
    </nav>
  );
};