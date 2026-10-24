import styles from './Signup.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'

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

          {/* Divider */}
          <div className={styles.divider}>
            <span>Or</span>
          </div>

          {/* Social sign-in buttons */}
          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              <img src={googleLogo} alt="" />
              Sign in with Google
            </button>

            <button type="button" className={styles.socialButton}>
              <img src={appleLogo} alt="" />
              Sign in with Apple
            </button>
          </div>

          {/* Bottom text */}
          <p className={styles.bottomText}>
            Have an account?{' '}
            <a href="#signin">Sign In</a>
          </p>
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
