/* global defaultStyles describe expect it test*/
/* eslint no-undef: "error"*/

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/App';
import defaultStyles from '../utils/styles';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(
      shallow(<App />).contains(
        <div className="app" style={defaultStyles}>
          Hello world
        </div>
      )
    ).toBe(true);
  });

  it('should be selectable by class "app"', function() {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('Hello world');
  });
});
