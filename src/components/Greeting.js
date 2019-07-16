import React from 'react';
import Row from './Row';
import {ThemeContext, LocaleContext} from './context';
export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      surName: 'Mathew', 
      width:window.innerWidth
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount(){
    document.title = this.state.name+ ' ' + this.state.surName;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(){
    document.title = this.state.name+ ' ' + this.state.surName;
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize (){
    this.setState({width:window.innerWidth});
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
      { theme => (
          <section className={theme}>
            <Row label="Name">
              <input
                value={this.state.name}
                onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input
                value={this.state.surName}
                onChange={this.handleSurNameChange} />
            </Row>  
            <LocaleContext>
              {locale => (
                <Row label="Language">
                  {locale}
                </Row>  
              )}
            </LocaleContext> 
            <Row label="Width">
              {this.state.width}
            </Row>         
          </section>
      )}
        </ThemeContext>
    );
  }
}