import React from 'react';
import styles from '../styles.module.css'

export default ({ field, errors }) => {
    return !errors[field] || <small className={styles.error}>{errors[field]}</small>;
}
