import { isRequiredMsg, mustMatchMsg, mustDifferMsg, minLengthMsg, regexMsg, emailMsg, maxLengthMsg, minValueMsg } from './ErrorMessages'

export const required = text => {
  if (text) {
    return null
  } else {
    return isRequiredMsg
  }
}

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] == text ? null : mustMatchMsg(fieldName)
  }
}

export const mustDiffer = (field, fieldName) => {
  return (text, state) => {
    return state[field] != text ? null : mustDifferMsg(fieldName)
  }
}

export const minLength = length => {
  return text => {
    return (!text ? 0 : text.length) >= length ? null : minLengthMsg(length)
  }
}

export const maxLength = length => {
  return text => {
    return (!text ? 0 : text.length) <= length ? null : maxLengthMsg(length)
  }
}

export const regex = regex => {
  return text => {
    return regex.test(text) ? null : regexMsg
  }
}

export const email = text => {
  var re = /^$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
  return re.test(text) ? null : emailMsg
}

export const minValue = value => {
  return fieldValue => {
    return fieldValue && fieldValue >= value ? null : minValueMsg(value)
  }
}
