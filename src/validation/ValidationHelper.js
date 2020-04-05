export const ruleRunner = (field, label, ...validations) => {
  return (state) => {
      for (let v of validations) {
          let errorMessageFunc = v(state[field], state);
          if (errorMessageFunc) {
              return {[field]: errorMessageFunc(label)};
          }
      }
      return null;
  };
};

export const runValidation = (model, runners) => {
  return runners.reduce((memo, runner) => {
      return Object.assign(memo, runner(model));
  }, {});
};

export const hasErrors = (validationErrors) => {
  for (var key in validationErrors) {
      if (validationErrors.hasOwnProperty(key)) {
          return true;
      }
  }
  return false;
}