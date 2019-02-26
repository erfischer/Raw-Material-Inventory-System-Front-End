import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      return  <div classname="wrapper">
      <div className="form-wrapper">
      <h1>Create a new account</h1>
      <form onSubmit={this.handleSubmit} noValidate>
      <div className= "firstName"> 
      <label htmlFor="firstName"> First Name</label>
      <input type="text" className= "" placeholder="First Name" type="text" name="firstName" noValidate
      onChange={this.handleChange}
      />

    </div>
     <div className="lastName">
     <label htmlFor="lastName">Last Name</label>
     <input type="text" className= "" Placeholder="Last Name" type="text" name="lastName" noValidate 
     onChange={this.handleChange}
     />
     </div>
     
     <div className="email">
     <label htmlFor="email"> Email Acct</label>
     <input type="text" className= "" Placeholder="Email" type="text" name="email" noValidate
      onChange={this.handleChange}
     />

     <div className="password">
     <label htmlFor="password"> Password</label>
     <input type="text" className= "" Placeholder="Password" type="text" name="password" noValidate
     onChange={this.handleChange} 
     />

     </div>
     <div className="createAccount">
     <button type="submit">Create Account</button>
     <small>Already have one? </small>

     </div>  
     </div>
         </form>
       </div>
  </div>;
  }
}

export default App;