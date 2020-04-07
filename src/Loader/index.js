import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css'
import GlobalDispatcher, {
  BUSY_STATE_CHANGED,
} from '../infra/GlobalDispatcher';

function Loader({ threshold }) {
  let busy = false;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    GlobalDispatcher.on(BUSY_STATE_CHANGED, payload => {
      busy = payload;

      if (payload) {
        setTimeout(() => {
          if (busy) {
            setVisible(true);
          }
        }, threshold);
      } else {
        setVisible(false);
        busy = false;
      }
    });

    return () => {
      GlobalDispatcher.removeAllListeners(BUSY_STATE_CHANGED);
    };
  }, []);

  return isVisible ? (
    <div id="loader" className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  ) : null;
}

export default Loader;
