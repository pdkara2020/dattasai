import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import base64 from 'react-native-base64';

import Login from './Login';
import DudaTemplates from './DudaTemplates';
import history from './history';

class Customer extends Component {
  constructor(props){
    super(props);
    this.state={
	account_name:'',
      first_name:'',
      last_name:'',
      email:''
    }
  }
  
  handleClick = event => {
	  
	  //Define API End Points
	  var createSiteAPI = "/api/sites/multiscreen/create"; // template_id
	  var createUserAPI = "/api/accounts/create";
	  var grantPermissionAPI = "";
	  
      var self = this;
	
	var data1 = JSON.stringify({
		"account_type": "CUSTOMER",
		"account_name" : this.state.account_name,
		"first_name": this.state.first_name,
		"last_name":this.state.last_name,
		"email":this.state.email
	});

	axios.post(createUserAPI, data1,
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(function(response) {
    console.log('Authenticated' + JSON.stringify(response));
	
	  var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Registered successfully.";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
	   });
  }).catch(function(error) {
    console.log(error);
  });
  
  
  
  /*
    axios.post(apiBaseUrl+'/register', data)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     } else {
		console.log("NO response for creation...");
	 }
   })
   .catch(function (error) {
     console.log(error);
   });
   */
	  
  };
  
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar showMenuIconButton={false}
             title="Please Enter The Details"
           />
		    <TextField
             hintText="Selected Template"
             floatingLabelText="Selected Template"
			 value={this.props.location.state.template_id}
			 disabled 
             onChange = {(event,newValue) => this.setState({account_name:newValue})}
             />
           <br/>
		    <a href={this.props.location.state.preview_url}> preview </a>
			
           <br/>
		   <TextField
             hintText="Enter your Account Name"
             floatingLabelText="Account Name"
             onChange = {(event,newValue) => this.setState({account_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
		   <RaisedButton label="Back" primary={true} style={style} onClick={(event) =>  history.push('/DudaTemplates')}/>
           <RaisedButton label="Finish" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};


export default Customer;