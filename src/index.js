import React from 'react'
import { useLocalStorage as lssHook } from './hooks/LocalStorageStateHook';
import vlHook from './validation/useValidation';
import * as rules from './validation/ValidationRules';
import { ruleRunner as rr, hasErrors as he } from './validation/ValidationHelper';
import es from './ErrorSpan';
import request, { updateAuthHeader as updAuth, clearAuthHeader as clAuth } from './infra/Http';
import LoaderComponent from './Loader';
import modal from './Modal';
import auth2Service from './infra/Auth2Service';

export const ErrorSpan = es;

export const useLocalStorage = lssHook;

export const useValidation = vlHook;

export const validationRules = rules;

export const ruleRunner = rr;

export const hasErrors = he;

export const http = request;

export const Loader = LoaderComponent;

export const updateAuthHeader = updAuth;

export const clearAuthHeader = clAuth;

export const Modal = modal;

export const Auth2Service = auth2Service;
