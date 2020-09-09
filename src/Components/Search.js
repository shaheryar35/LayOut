import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.css'

 class Search extends Component {
     constructor(props) {
         super(props)
         this.state = {
            showInputSearch: true,
         }
     }
     hideInputForm=(e)=>{
         this.setState({showInputSearch: !this.state.showInputSearch})
     }
    render() {
        return (
           <>
           {this.state.showInputSearch ?
             <FadeIn>
                
             <Jumbotron fluid style={{background: 'black'}}>  
             <span> <FontAwesomeIcon  icon={faTimes} style={{float:'right', marginRight:'1.5rem', color: 'white', fontSize: '2.0em', cursor: 'pointer'}} onClick={this.hideInputForm.bind(this)} /> </span>  
              <Container fluid >
           
               
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'100px', height:'300px'}}> 
                   <input type='text' className={styles['input']} style={{width: '50%'}}
                   placeholder="Type and Hit Enter"
                   />
              </div>
              
             
              

                </Container>
               
               </Jumbotron>
               
                 </FadeIn>:
                null
                
           }
          
            </>
        )
    }
}
export default Search;
