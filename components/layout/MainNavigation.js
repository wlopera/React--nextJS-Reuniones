import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React - NextJS: Reuniones</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Todas las reuniones</Link>
          </li>
          <li>
            <Link href="/new-meetup">Agregar nueva reunión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
