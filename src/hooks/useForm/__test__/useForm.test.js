import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import useForm from '../useForm';

Enzyme.configure({ adapter: new Adapter() });

describe('useCustomHook()', () => {
  let results;
  let validateLogin;
  let INITIAL_STATE_FORM;
  let login;
  beforeEach(() => {
    validateLogin = jest.fn();
    login = jest.fn();
    INITIAL_STATE_FORM = {
      email: '',
      password: '',
    };
  });

  const renderHook = hook => {
    const HookWrapper = () => {
      results = hook(INITIAL_STATE_FORM, validateLogin, login);
      return null;
    };

    mount(<HookWrapper />);
    return results;
  };

  test('useForm should return {email, password, handleSubmit and handleChange} with expected results for email and password and there should be no errors', () => {
    validateLogin = jest.fn().mockImplementationOnce(() => {
      return { message: '' };
    });
    const mockedEvent = { preventDefault: jest.fn() };
    renderHook(useForm);
    expect(results.values.email).toEqual('');
    expect(results.values.password).toEqual('');

    act(() => {
      results.handleChange({
        target: { name: 'email', value: 'mocked@email.com' },
      });
      results.handleChange({
        target: { name: 'password', value: 'secretMockPass1234' },
      });
      results.handleSubmit(mockedEvent);
    });
    expect(results.values).toHaveProperty('email');
    expect(results.values).toHaveProperty('password');
    expect(results.errors).toEqual({});
    expect(results.values.password).toEqual('secretMockPass1234');
    expect(results.values.email).toEqual('mocked@email.com');
    expect(results.handleChange).toBeInstanceOf(Object);
    expect(results.handleSubmit).toBeInstanceOf(Object);
    expect(mockedEvent.preventDefault).toHaveBeenCalled();
    expect(validateLogin).toHaveBeenCalled();
    expect(login).toHaveBeenCalled();
  });

  test('useForm should return {email, password, handleSubmit and handleChange} with expected results for email and password and there will be errors', () => {
    validateLogin = jest.fn().mockImplementationOnce(() => {
      return { message: 'mocked error' };
    });
    const mockedEvent = { preventDefault: jest.fn() };
    renderHook(useForm);
    expect(results.values.email).toEqual('');
    expect(results.values.password).toEqual('');

    act(() => {
      results.handleChange({
        target: { name: 'email', value: 'mocked@email.com' },
      });
      results.handleChange({
        target: { name: 'password', value: 'secretMockedPass1234' },
      });
      results.handleSubmit(mockedEvent);
    });
    expect(results.values).toHaveProperty('email');
    expect(results.values).toHaveProperty('password');
    expect(results.errors).toEqual({ message: 'mocked error' });
    expect(results.values.password).toEqual('secretMockedPass1234');
    expect(results.values.email).toEqual('mocked@email.com');
    expect(results.handleChange).toBeInstanceOf(Object);
    expect(results.handleSubmit).toBeInstanceOf(Object);
    expect(mockedEvent.preventDefault).toHaveBeenCalled();
    expect(validateLogin).toHaveBeenCalled();
  });
});
