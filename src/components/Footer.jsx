import styles from './css/Footer.module.css';

export default function Footer({completedTasks, totalTasks}) {
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Tasks: {completedTasks}</span>
            <span className={styles.item}>Total Tasks: {totalTasks}</span>
        </div>
    )
}