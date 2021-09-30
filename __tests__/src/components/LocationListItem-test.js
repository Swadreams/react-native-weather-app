import 'react-native';
import React from 'react';
import {LocationListItem} from '../../../src/components/common/LocationListItem';
import {create} from 'react-test-renderer';
import {MockWrapper} from '../../../__mocks__/Wrapper';

describe('LocationListItem Component', () => {
  let component;
  beforeEach(() => {
    component = create(<MockWrapper component={LocationListItem} />);
  });

  it('Message snapshot ', () => {
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
