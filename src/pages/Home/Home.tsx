import React from 'react'
import WaveIcon from '@/components/svg/WaveIcon'
import styles from './styles.module.css'

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <section>
          <h1>Welcome to the Home Page</h1>
          <p>This is the main page of our app.</p>
        </section>
        <section />
        <WaveIcon className={styles.wave_icon} />
      </div>
    </div>
  )
}

export default Home
