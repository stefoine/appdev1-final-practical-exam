import styles from './Login.module.css'
import blossomFlower from '../../assets/blossom-flower.svg'
import googleLogo from '../../assets/icons-google-logo.svg'
import appleLogo from '../../assets/icons-apple-logo.svg'
import { Input } from '@/components/ui/input'

function Login() {
  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <div className={styles.formContainer}>

          <div className={styles.heading}>
            <h1 className={styles.title}>Welcome back!</h1>
            <p className={styles.subtitle}>
              Enter your Credentials to access your account
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formGroup}>
              <label htmlFor="login-email">Email address</label>
              <Input
                type="email"
                id="login-email"
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="login-password">Password</label>
                <a
                  href="#forgot-password"
                  className={styles.forgotPassword}
                >
                  forgot password
                </a>
              </div>

              <Input
                type="password"
                id="login-password"
                placeholder="Enter your password"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember for 30 days
              </label>
            </div>

            <button
              type="submit"
              className={styles.signupButton}
            >
              Login
            </button>
          </form>

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialButtons}>
            <button
              type="button"
              className={styles.socialButton}
            >
              <img src={googleLogo} alt="" />
              Sign in with Google
            </button>

            <button
              type="button"
              className={styles.socialButton}
            >
              <img src={appleLogo} alt="" />
              Sign in with Apple
            </button>
          </div>

          <p className={styles.bottomText}>
            Don’t have an account?{' '}
            <a href="#signup">Sign Up</a>
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

export default Login
