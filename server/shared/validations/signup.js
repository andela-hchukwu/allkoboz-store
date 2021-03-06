import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }

  if (Validator.isNull(data.firstname)) {
    errors.firstname = 'This field is required';
  }

  if (Validator.isNull(data.lastname)) {
    errors.lastname = 'This field is required';
  }

  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }

  if (Validator.isNull(data.confirmPassword)) {
    errors.confirmPassword = 'This field is required';
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
