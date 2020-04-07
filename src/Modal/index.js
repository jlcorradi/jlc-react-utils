import React from 'react';
import { BsX } from 'react-icons/bs';
import styles from '../styles.module.css'

export default ({ children, visible, title, onClose }) => {
  return visible &&
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <strong>
              {title}
            </strong><BsX style={{ cursor: 'pointer', float: 'right', paddingBottom: 4 }} size={26} onClick={onClose}>x</BsX>
          </div>
          <div className={styles.boxContent}>
            {children}
          </div>
        </div>
      </div>
    </div>
}
