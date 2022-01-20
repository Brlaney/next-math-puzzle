import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar() {
  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav id={styles.navcontainer} className='uk-navbar-container'>
        <div id={styles.parent} className='uk-navbar-left uk-margin-left'>
          <a id={styles.brand} href='/' className='uk-navbar-item uk-logo'>
            [ Math Puzzles ]
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div id={styles.rightside} className='uk-navbar-right uk-margin-right'>
          <ul id={styles.list} className='uk-navbar-nav'>
            <li className={styles.active}>
              <Link href='/'>
                <a className={styles.link}>Color Sorting</a>
              </Link>
            </li>
            <li className={styles.notactive}>
              <Link href='/tic-tac-toe'>
                <a className={styles.link}>Tic-Tac-Toe</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};
