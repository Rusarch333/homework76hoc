import React, { Component } from 'react';
import { getComponentConstantsForLanguage } from '../../utils/utils';
import { WithLanguage } from '../HOCs';
import CONSTANTS from './../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const updateWindowWorkLanguage = (language) =>
  getComponentConstantsForLanguage(LANGUAGE_CONSTANTS, 'WINDOW_WORK', language);

class WindowWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
    this.WINDOW_WORK_LANGUAGE_CONSTANTS = updateWindowWorkLanguage(
      props.language
    );
  }
  handlerResizeWindow = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.handlerResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handlerResizeWindow);
  }

  render() {
    const { w, h } = this.state;
    this.WINDOW_WORK_LANGUAGE_CONSTANTS = updateWindowWorkLanguage(
      this.props.language
    );
    return (
      <div>
        {this.WINDOW_WORK_LANGUAGE_CONSTANTS.DIV_CONTENT_WIDTH +
          ' = ' +
          w +
          ' ' +
          this.WINDOW_WORK_LANGUAGE_CONSTANTS.DIV_CONTENT_PX +
          ', ' +
          this.WINDOW_WORK_LANGUAGE_CONSTANTS.DIV_CONTENT_HEIGHT +
          ' = ' +
          h +
          ' ' +
          this.WINDOW_WORK_LANGUAGE_CONSTANTS.DIV_CONTENT_PX}
      </div>
    );
  }
}

export default WithLanguage(WindowWork);
