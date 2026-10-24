import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'

function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>

          <form
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Name"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the terms &amp; policy
              </label>
            </div>

            <button type="submit" className={styles.signupButton}>
              Signup
            </button>
          </form>
        </div>
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
