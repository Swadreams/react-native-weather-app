import 'react-native';
import React from 'react';
import Message from '../../../src/components/common/Message';
import renderer from 'react-test-renderer';

test('Message snapshot ', () => {
  const snap = renderer.create(<Message message={'welcome'} />).toJSON();
  expect(snap).toMatchSnapshot();
});
