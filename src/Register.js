import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import base64 from 'react-native-base64';

import Login from './Login';
import DudaTemplates from './DudaTemplates';
import Customer from './Customer';
import history from './history';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
	account_name:'',
      first_name:'',
      last_name:'',
      email:'',
	  password:''
    }
  }
  
  handleClick = event => {
	  
	  //Define API End Points
	  var createSiteAPI = "/api/sites/multiscreen/create"; // template_id
	  //{"site_name":"e025bc7e"}  --- {"template_id":1147266}
	  
	  var createUserAPI = "/api/accounts/create";
	  //"Account 'dattasai' account_name 
	  
	  var grantPermissionAPI = "/api/accounts/dattasai/sites/e025bc7e/permissions";
	  
	  //Reset Password and then open URL
	  var resetPassword = "/api/accounts/reset-password/dattasai";
	  //reset_url
	  
      var self = this;
	/*
	var siteData = JSON.stringify({
		"template_id": this.props.location.state.template_id
	});
	
	
	var userData = JSON.stringify({
		"account_type": "CUSTOMER",
		"account_name" : this.state.account_name,
		"first_name": this.state.first_name,
		"last_name":this.state.last_name,
		"email":this.state.email
	});
	*/

	var permissionData = JSON.stringify({
		"permissions" : ["STATS_TAB","EDIT","E_COMMERCE","PUBLISH","REPUBLISH","DEV_MODE","INSITE","SEO","BACKUPS","CUSTOM_DOMAIN","RESET","BLOG","PUSH_NOTIFICATIONS","LIMITED_EDITING","CONTENT_LIBRARY"]
	});

/*
	axios.post(createSiteAPI, siteData,
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(function(response) {
    console.log('Authenticated' + JSON.stringify(response));

	//TODO Create User
	
  }).catch(function(error) {
    console.log(error);
  });
 
 
 	axios.post(createUserAPI, userData,
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(function(response) {
    console.log('Authenticated' + JSON.stringify(response));
	history.push('/Customer',response);
	//TODO Create User
	
  }).catch(function(error) {
    console.log(error);
  });
  
  
  	axios.post(grantPermissionAPI, permissionData,
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(function(response) {
    console.log('Authenticated' + JSON.stringify(response));
	//history.push('/Customer',response);
	//TODO Create User
	
  }).catch(function(error) {
    console.log(error);
  });
 */ 
    axios.post(resetPassword, '',
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(function(response) {
    console.log('Authenticated' + response.data.reset_url);
	
	window.location = response.data.reset_url;
	//history.push('/Customer',response);
	//TODO Create User
	
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
   
   value={this.props.location.state.template_name}
   
    <a href={this.props.location.state.preview_url}> preview </a>
   
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
			 value={"TESTING MODE TEMPLATE"} 
			  disabled 
             onChange = {(event,newValue) => this.setState({account_name:newValue})}
             />
           <br/>
		    <a href={"www.google.com"}> preview </a>
			
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
		   <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
		   <RaisedButton label="Back" primary={true} style={style} onClick={(event) =>  history.push('/DudaTemplates')}/>
           <RaisedButton label="Next" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};


export default Register;