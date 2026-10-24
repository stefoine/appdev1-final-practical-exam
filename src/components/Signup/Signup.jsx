import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Get Started Now
        </h1>
      </div>

      <div className={styles.right}>
        <img
          src={blossomFlower}
          alt="Blossom flower"
          className={styles.flower}
        />
      </div>
    </div>
  )
}

export default Signup
