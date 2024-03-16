import styles from "./Navbar.module.css";
import NavContent from "./NavContent";
function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div id={styles.wbName}>DemoApp</div>
        <div>
          <NavContent></NavContent>
        </div>
        <div id="login">Login</div>
      </div>
    </>
  );
}

export default Navbar;
