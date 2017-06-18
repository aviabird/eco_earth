import React from 'react';
import App from '../../src/app/app';
import { shallow } from 'enzyme'
import { expect } from 'chai';

const component = shallow(<App />);

describe('should render app component', () => {
  it('renders...', () => {
    expect(component).to.exist;
  });

  it('shows a header', () => {
    expect(component.find('.header')).to.exist;
  });

  it('shows a category list', () => {
    expect(component.find('.categories-list')).to.exist;
  });
});



