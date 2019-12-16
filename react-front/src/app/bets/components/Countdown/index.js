import PropTypes from 'prop-types';
import React from 'react';

const Countdown = ({time}) => (
  <div className="uk-grid-small uk-child-width-auto" uk-grid="true" uk-countdown={`date: ${time}`}>
    <div>
      <div className="uk-countdown-number uk-countdown-days"></div>
      <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
    </div>
    <div>
      <div className="uk-countdown-number uk-countdown-hours"></div>
      <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
    </div>
    <div>
      <div className="uk-countdown-number uk-countdown-minutes"></div>
      <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Min</div>
    </div>
    <div>
      <div className="uk-countdown-number uk-countdown-seconds"></div>
      <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Sec</div>
    </div>
  </div>
);

Countdown.propTypes = {};

export default Countdown;