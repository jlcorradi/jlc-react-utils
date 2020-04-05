import { useState } from 'react'
import { runValidation, hasErrors } from './ValidationHelper';

/**
 * Provides hook for form validation and state management
 * 
 * @param  {any} initialModel Initial State
 * @param  {Array<ruleRunner>} validationRules Array of ruleRunner
 * @param  {Function} submitHandler What should happen when the form is submitted
 * 
 * @returns {any} model, errors = Object with error messages, submitted=t/f, 
 *            modelOnChange handler to change model, onSubmit = add this to your form 
 */
export default (initialModel, validationRules, submitHandler) => {

  const [model, setModel] = useState(initialModel);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(false);

  const modelOnChange = (field, value) => {
    let newModel = { ...model };
    newModel[field] = value;
    setModel(newModel);
    setErrors(runValidation(newModel, validationRules));
  };

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    let errors = runValidation(model, validationRules)
    setErrors(errors);
    if (!hasErrors(errors)) {
      submitHandler(model);
    }
  }

  return [model, errors, submitted, modelOnChange, onSubmit];
}