import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VerticalCardInfo from '../VerticalCardInfo';
Enzyme.configure({ adapter: new Adapter() });

describe('<VerticalCardInfo />', () => {
  let wrapper;

  let theme;
  let renderHook;
  const ThemeContext = jest.fn();
  const useContextSpy = jest.spyOn(React, 'useContext');
  useContextSpy.mockImplementation(ThemeContext);
  beforeEach(() => {
    theme = require('../../../../styles');

    renderHook = () => {
      const HookWrapper = () => {
        return null;
      };

      return mount(<HookWrapper />);
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    wrapper = renderHook(
      <ThemeContext.Provider value={theme.darkTheme}>
        <VerticalCardInfo
          data={[]}
          title="Mocked title"
          image="mocked-image.jpeg"
          rowsToRender={[
            {
              name: 'mocked-name',
              value: 'mocked-value',
            },
          ]}
        />
      </ThemeContext.Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
  console.log(wrapper);
});
