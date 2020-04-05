import { useState } from 'react'
import { runValidation, hasErrors } from './ValidationHelper';

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