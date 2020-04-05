export const isRequiredMsg = fieldName => `${fieldName} is required`

export const mustMatchMsg = otherFieldName => {
  return (fieldName) => `${fieldName} and ${fieldName} Must match`
};

export const mustDifferMsg = otherFieldName => {
  return (fieldName) => `${fieldName} and ${otherFieldName} must differ`
};

export const minLengthMsg = length => {
  return (fieldName) => `${fieldName} must be ${length} lenght`
};

export const maxLengthMsg = length => {
  return (fieldName) => `${fieldName} must not have more than ${length} characters`
};

export const regexMsg = fieldName => {
  return `${fieldName} must match the appropriate pattern`
}

export const emailMsg = fieldName => `${fieldName} must be an email`

export const minValueMsg = fieldName => {
  return (minValue) => `${fieldName} must be greater than ${minValue}`
}