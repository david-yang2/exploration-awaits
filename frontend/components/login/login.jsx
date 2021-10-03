import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            // email: "",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.useDemoLogin = this.useDemoLogin.bind(this)
    }
    
    handleInput(type){
        return (e) => {

            this.setState({[type]: e.currentTarget.value});
        }
    }

    

    handleSubmit(e) {
        
        e.preventDefault();
        this.props.login(this.state)
        .then(()=> this.props.history.push(`/`));
    }

    useDemoLogin(){
        // login with demo account
        this.props.login({username:"David", password:"DavidDemo"})
        this.props.history.push(`/`)
    }

    // remember password validates the length of 6
    render(){

        return(
            <div className="session">
                <div className="session-container">
                    <h2> Please Login!</h2>
                    <form>
                        <input 
                            placeholder="Username:"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />

                        <input 
                            placeholder="Password:"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <div className="loginbtn-container">
                            <button onClick={this.handleSubmit}>Login</button>
                            <button onClick={this.useDemoLogin}>Demo User</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;