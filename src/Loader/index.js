import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css'

function Loader({ threshold, isLoading }) {
  let busy = false;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        if (busy) {
          setVisible(true);
        }
      }, threshold);
    } else {
      setVisible(false);
      busy = false;
    }
  }, []);

  return isVisible ? (
    <div id="loader" className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  ) : null;
}

export default Loader;
