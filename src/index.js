import React from 'react'
import styles from './styles.module.css'
import { useLocalStorage as lssHook } from './hooks/LocalStorageStateHook';
import vlHook from './validation/useValidation';
import * as rules from './validation/ValidationRules';
import { ruleRunner as rr, hasErrors as he } from './validation/ValidationHelper';
import es from './ErrorSpan';


export const ErrorSpan = es;

export const useLocalStorage = lssHook;

export const useValidation = vlHook;

export const validationRules = rules;

export const ruleRunner = rr;

export const hasErrors = he;


