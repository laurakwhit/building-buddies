import React from 'react';
import { shallow } from 'enzyme';

import BuildingInfo from './BuildingInfo';

describe('BuildingInfo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuildingInfo />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
