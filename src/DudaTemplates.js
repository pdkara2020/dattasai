import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { render } from "react-dom";
import logo from './logo.svg';
import './App.css';
import Gallery from 'react-grid-gallery';

import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

import axios from 'axios';
import base64 from 'react-native-base64';
import DudaTemplateSelection from './DudaTemplateSelection';
import Login from './Login';
import Register from './Register';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Routes';
import history from './history';
import AppBar from 'material-ui/AppBar';


class DudaTemplates extends Component {
	
  constructor(props){
    super(props);
	this.state={ templates : "pradeep" ,
	image: null
    };
    this.onPick = this.onPick.bind(this)

	
  }
	
componentDidMount() {
	
  var apiBaseUrl = "/api/sites/multiscreen/templates";
	
 axios.get(apiBaseUrl,
	{
		withCredentials: true,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": 'Basic '+base64.encode('4a24452391:q2ANPKP9BpsH')
		}
	}).then(response => 	
	
		this.setState({ templates: response })
	);
        
} 


	handleClick = event => {
	 
			//console.log(JSON.stringify(this.state.templates.data[event]));
			//this.state.templates.data[event].isSelected= true;
			//window.open(this.state.templates.data[event].preview_url, 'sharer', 'toolbar=0,status=0,width=548,height=325');
				  
	   
			
	}
	
	handleButtonClick = event => {
		alert('it is me button');
		 
	}
	
	  onPick(image) {
    this.setState({image})
  }

render() {
	

	const IMAGES = [];
	console.log('Data === ' + JSON.stringify(this.state.templates.data));
	

	if (this.state.templates != null && this.state.templates != undefined 
	  && this.state.templates.data != null && this.state.templates.data != undefined && 
	  this.state.templates.data.length > 0)
	{
		
		
		this.state.templates.data.map(function(template, index){
			
			var customTemplates = [1147264 ,1147266 , 1147276,1147290 ,1147291 ,1147298];
			var exist = customTemplates.includes(template.template_id);
			if (exist) {		
				const obj = new Object();
				obj.value = template;
				obj.thumbnail = template.thumbnail_url; 
				obj.src = template.desktop_thumbnail_url; 
				obj.title= "sample";
				obj.caption= "test";
				obj.thumbnailCaption = template.template_name;
				obj.id = template.template_id;
				//obj.enableImageSelection = true;
				//obj.isSelected= true;
				//obj.thumbnailWidth = 350;
				//obj.humbnailHeight = 250;
				IMAGES.push(obj);
			}	
					
        });
		
		//this.setState({ templates: IMAGES })
		//onClickThumbnail={(event) => this.handleClick(event)}
		//console.log(JSON.stringify(this.state.image.value.template_id))
		//window.open("/Login",'_self')
	}
	

	
 return (
 <>
 
  
        <MuiThemeProvider>
          
          <AppBar showMenuIconButton={false}
             title="Please select the Template"
           />
		   
		     <br/>
		    <br/>
 			 
		 <ImagePicker 
          images={IMAGES} onPick={this.onPick}
		  
        />
		
		  <br/>
		    <br/>
			
		<RaisedButton label="Next" primary={true} 
			onClick={() =>   history.push('/Register', this.state.image.value) } 
		 />
	 </MuiThemeProvider>
   	
 </>
	);
}
	
}


export default DudaTemplates;
