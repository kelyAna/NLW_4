<<<<<<< HEAD
import styles from '../styles/components/ExperienceBar.module.css'

=======
>>>>>>> 894cd09024fa414c6de717c93d233a582675c5dc
export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}
