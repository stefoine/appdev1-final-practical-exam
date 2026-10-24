import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        {/* Left section intentionally empty */}
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
