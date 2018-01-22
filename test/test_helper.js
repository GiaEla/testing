import React from 'react';
import jsdom from 'jsdom'; // library for faking DOM
import _$ from 'jquery';
import * as TestUtils from 'react/lib/ReactTestUtils';
import * as ReactDOM from 'react/lib/ReactDOM';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';

import reducers from '../src/reducers';

// set up testing enviroment to run like a browser in the command line
global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window); // we need to provide DOM for jQuery, if it tries to find it automatticaly, it will fail

// build 'renderComponent' helper that should rener a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

// build helper for simulating events
// every jQuery instance will have acces to that function. We use classic function (not fat arrow)
// because we need 'this' to be bound to elemnt
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };