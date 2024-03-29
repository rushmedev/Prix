import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handlechange = event =>{
        const{value,name} = event;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    label='Email'
                    value={this.state.email} 
                    handleChange={this.handlechange} required/>

                    <FormInput 
                    type="password" 
                    name='password' 
                    label='Password'
                    value={this.state.password} 
                    handleChange={this.handlechange} required/>

                    <CustomButton type="submit">Sign In</CustomButton>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;