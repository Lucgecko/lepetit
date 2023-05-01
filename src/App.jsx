import styles from './style'


import './components/Navbar'

import './assets/banner-bg.png'


const App = () => (
  <div className="bg-gray-900 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div classname={`$styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`$styles.boxWidth}`}>
        <Menu />
        <Contact />
      </div>
    </div>
  </div>
);


export default App