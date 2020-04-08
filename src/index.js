import React from 'react'
import { useLocalStorage as lssHook } from './hooks/LocalStorageStateHook';
import validationHook from './validation/useValidation';
import * as rules from './validation/ValidationRules';
import { ruleRunner as rr, hasErrors as he } from './validation/ValidationHelper';
import ErrorSpanComponent from './ErrorSpan';
import request, { updateAuthHeader as updAuth, clearAuthHeader as clAuth } from './infra/Http';
import LoaderComponent from './Loader';
import ModalComponent from './Modal';
import auth2Service from './infra/Auth2Service';

export const ErrorSpan = ErrorSpanComponent;

export const useLocalStorage = lssHook;

export const useValidation = validationHook;

export const validationRules = rules;

export const ruleRunner = rr;

export const hasErrors = he;

export const http = request;

export const Loader = LoaderComponent;

export const updateAuthHeader = updAuth;

export const clearAuthHeader = clAuth;

export const Modal = ModalComponent;

export const Auth2Service = auth2Service;
