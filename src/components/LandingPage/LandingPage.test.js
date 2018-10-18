import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('LandingPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when Sign Up is clicked', () => {
    expect(wrapper.state('modalOpen')).toEqual(false);
    wrapper.find('.landing-page button').simulate('click');
    expect(wrapper.state('modalOpen')).toEqual(true);
  });

  it('should update state when modal is closed', () => {
    wrapper.setState({ modalOpen: true });
    wrapper.instance().handleModalClose();
    expect(wrapper.state('modalOpen')).toEqual(false);
  });
});
