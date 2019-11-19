// import React from 'react';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { makeStyles } from '@material-ui/core/styles';
// import { mount } from 'enzyme';
// import { ThemeContext } from '../../../../contexts';
// import VerticalCardInfo from '../VerticalCardInfo';
// import { lightTheme, darkTheme } from '../../../../styles';
// configure({ adapter: new Adapter() });

// describe('<VerticalCardInfo>', () => {
//   beforeEach(() => {});
//   test('should render correctly in debug mode', () => {
//     const toggleTheme = jest.fn();
//     const person = {
//       name: 'Luke Skywalker',
//       height: 172,
//       image:
//         'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
//     };
//     const component = mount(
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         <VerticalCardInfo
//           data={person}
//           rowsToRender={[
//             { name: 'Height', value: 189 },
//             { name: 'Weight', value: 99 },
//             { name: 'Species', value: 'MockedName' },
//             { name: 'Home World', value: 'Hello World' },
//           ]}
//         />
//       </ThemeContext.Provider>,
//     );
//     expect(component).toMatchInlineSnapshot();
//   });
// });

// import { render, fireEvent } from '../../../../test-utils';
/* eslint global-require: 0 */
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { ThemeContext } from '../../../../contexts/index';
import VerticalCardInfo from '../VerticalCardInfo';

//TODO cannot import useTheme
import useTheme from '../../../../hooks/useTheme/useTheme';

describe('<VerticalCardInfo />', () => {
  let light;
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
