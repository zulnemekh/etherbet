import React, { Component } from 'react';
import enhancers from './enhancers';


class Index extends Component {
  componentDidMount(){
    const { getBets } = this.props;
    getBets();
  }
  render() {
    const { bets } = this.props;
    return (<div className="projects">

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        {bets && bets.map((bet) => {
          return (
            <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
              <div className="project-list">
                <div className="content">
                  <h3>{bet.par1 } VS {bet.par2 }</h3>
                  <p>{bet.description}</p>
                  <p>{bet.category}</p>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>);
  }
}

export default enhancers.redux(Index);