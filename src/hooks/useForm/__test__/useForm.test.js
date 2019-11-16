import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { act } from 'react-dom/test-utils';

import useForm from '../useForm';
describe('useCustomHook()', () => {
  let results;
  let validateLogin;
  let INITIAL_STATE_FORM;

  beforeEach(() => {
    console.log('beforeEach time:', new Date());
    validateLogin = jest.fn();
    INITIAL_STATE_FORM = {
      email: '',
      password: '',
    };
  });
  const renderHook = hook => {
    console.warn('render hook time:', new Date());

    const HookWrapper = () => {
      debugger;
      results = hook(INITIAL_STATE_FORM, validateLogin);
      return null;
    };

    console.warn('results from renderHook time', results, new Date());
    mount(<HookWrapper />);
    return results;
  };

  test('useForm()', () => {
    renderHook(useForm);
    console.warn('results time:', results, new Date());
    expect(results.values.email).toEqual('');
    expect(results.values.password).toEqual('');

    act(() => {
      results.handleChange({
        target: { name: 'email', value: 'mocked@email.com' },
      });
    });
    expect(results.values.email).toEqual('mocked@email.com');
  });
});
