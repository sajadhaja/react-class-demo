import React from 'react';
import Row from './Row';
import { ThemeContext, LocaleContext } from './context'

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      surName: 'Mathew',
      width: window.innerWidth
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);

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

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surName;
    window.addEventListener('resize',this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name != this.state.name) {
      document.title = this.state.name + ' ' + this.state.surName;
    }
  }

  componentWillMount() {
    console.log("@@@Unmount");
    window.removeEventListener('resize',this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    return (
      <ThemeContext>
        {theme => (
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
            <Row label="width">
              {this.state.width}
            </Row>
          </section>
        )}
      </ThemeContext>

    );
  }
}