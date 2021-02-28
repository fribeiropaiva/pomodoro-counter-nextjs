import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(props) {
  return (
    <div className={styles.ExperienceBarContainer}>
      <span>0xp</span>
      <div className={styles.Bar}>
        <div className={styles.BarFill}></div>
        <span className={styles.CurrentXP}>300xp</span>
      </div>
      <span>600xp</span>
    </div>
  )
}
