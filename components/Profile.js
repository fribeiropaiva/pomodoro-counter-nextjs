import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ribeiro240.png" alt='' />
      <div>
        <strong>Filipe Ribeiro</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level 1</p>
      </div>
    </div>
  );
}
