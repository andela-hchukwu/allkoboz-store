import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { Link } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false,
      inValid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExist = this.checkUserExist.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors })
    }

    return isValid;
  }

  checkUserExist(event) {
    const field = event.target.name;
    const value = event.target.value;
    if (value !== '') {
      this.props.isUserExist(value).then(res => {
        let errors = this.state.errors;
        let inValid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          inValid = true;
        } else {
          errors[field] = '';
          inValid = false;
        }
        this.setState({ errors, inValid });
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully, welcome!'
          })
          this.context.router.push('/');
        },
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign up</h1>
        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          checkUserExist={this.checkUserExist}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup
          error={errors.firstname}
          label="Firstname"
          onChange={this.onChange}
          value={this.state.firstname}
          field="firstname"
        />
        <TextFieldGroup
          error={errors.lastname}
          label="Lastname"
          onChange={this.onChange}
          value={this.state.lastname}
          field="lastname"
        />
        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExist={this.checkUserExist}
          value={this.state.email}
          field="email"
          type="email"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />
        <TextFieldGroup
          error={errors.confirmPassword}
          label="Confirm Password"
          onChange={this.onChange}
          value={this.state.confirmPassword}
          field="confirmPassword"
          type="password"
        />
        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.inValid } className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
        <div className="container">Already have an account? <Link to="/login">Sign in here!</Link></div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExist: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
