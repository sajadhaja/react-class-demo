import React from 'react';
import Row from './Row';
import {ThemeContext,LocaleContext} from './context.js';

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      surName:'Mathew',
      width: window.innerWidth

    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount(){
    document.title = this.state.name + ' ' + this.state.surName;
    window.addEventListener('resize', this.handleResize);
  }


  handleResize = ()=> {
    this.setState({width:window.innerWidth});
  }
  componentDidUpdate(){
    document.title = this.state.name + ' ' + this.state.surName;
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSurNameChange(e) {
    this.setState({
      surName: e.target.value
    });
  }

  render() {
    return (  
        <ThemeContext>  
         {theme => (     
            <section className={theme}>
              <h1>* React Class Demo *</h1>
              <Row label="Name">
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange} />
              </Row>
              <Row label="SurName">
                <input
                  value={this.state.surName}
                  onChange={this.handleSurNameChange} />
              </Row>
              <Row label="Width">              
                  {this.state.width}                
              </Row>
              <LocaleContext>
               {locale => (  
                <Row label="Language">              
                   {locale}           
              </Row>  
              )} 
              </LocaleContext>
                        
            </section>
          )} 
          </ThemeContext>  
    );
  }
}