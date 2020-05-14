import React from 'react';
import {Grid,Paper,Link} from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/css/header.css';
class Header extends React.Component{
    state = {
        searchterm : '',
    }
   handleChange = (event) => this.setState({searchterm: event.target.value});
   handleSubmit = (event) =>{
        event.preventDefault();
       const {searchterm} = this.state;
       const {onFormSubmit} = this.props;   

       onFormSubmit(searchterm);
   }
    render(){
        return(
            <Grid item xs={12} className="HeadingGrid">
                    <Grid item style={{padding:"10px"}} className="barsHeading">
                        <div></div>
                        <div></div>
                        <div></div>
                    </Grid>
                    <Grid item  className="HeadingLogo">
                            <Link href="/" className="headingLogoLink">
                                <Paper className="headingLogoPaper">
                                    miniYoutube
                                </Paper>
                            </Link>  
                    </Grid>
                    <Grid item  className="searchBar"> 
                        <form className="searchForm" onSubmit={this.handleSubmit}>
                            <input type="text" className="searchField" id="searchField" onChange={this.handleChange} placeholder="Search here..."/>
                            <input type="submit" value="Search" className="searchBtn"/>
                        </form>
                    </Grid>
                    <Grid item className="profile"> 
                        <Paper className="profilePaper">
                            Welcome, <span>Guest</span>
                        </Paper>
                    </Grid>
            </Grid>
                
            
        )
    }
}
export default Header;
