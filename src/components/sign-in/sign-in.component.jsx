import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default class SignIn extends Component {
  constructor(props){
    super(props);

    this.state={
        email:'',
        password:''
    }
  }
  handleChange = e =>{

    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({email:'',password:''})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form >
            <FormInput label={"Email"} type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
            
            <FormInput label={"Password"} type="password" name='password' value={this.state.password} />
            
            <CustomButton type="submit" value="Submit Form" onSubmit={this.handleSubmit} children="Sign In"/>
        </form>
      </div>
    )
  }
}
