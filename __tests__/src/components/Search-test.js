import 'react-native';
import React from 'react';
import {SearchBar} from '../../../__mocks__/react-native-elements';
import {Search} from '../../../src/components/common/Search';
import {create} from 'react-test-renderer';
import {MockWrapper} from '../../../__mocks__/Wrapper';

describe('SearchComponent', () => {
  let component;
  beforeEach(() => {
    component = create(<MockWrapper MyComponent={Search} />);
  });

  it('Message snapshot ', () => {
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
