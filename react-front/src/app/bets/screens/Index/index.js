import React, { Component } from 'react';
import enhancers from './enhancers';


class Index extends Component {
  componentDidMount(){
    const { getBets } = this.props;
    getBets();
  }
  render() {
    return (<div className="projects">

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3">
          <div className="project-list">
            <div className="content">
              <h3>Blockchain <br />Technology</h3>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default enhancers.redux(Index);