import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { makeStyles } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import { ThemeContext } from '../../../../contexts';
import VerticalCardInfo from '../VerticalCardInfo';
import { lightTheme, darkTheme } from '../../../../styles';
configure({ adapter: new Adapter() });

describe('<VerticalCardInfo>', () => {
  beforeEach(() => {
    let theme;
    jest.mock('react', () => {
      return {
        useContext: () => ({ currentTheme: { colors: 'mockedColors' } }),
      };
    });

    jest.mock('@material-ui/core/styles', () => {
      return {
        makeStyles: () => ({
          mockedFunc() {
            return 'mockedResultFromMockedFunction';
          },
        }),
      };
    });
  });
  test('should render correctly in debug mode', () => {
    const toggleTheme = jest.fn();
    const person = {
      name: 'Luke Skywalker',
      height: 172,
      image:
        'https://links.gunaxin.com/content/images/post_images/Luke_Skywalker_039_s_Original_039_Star_Wars_039_Lightsaber_Is_Going_Up_For_Auction_1544116268_4528.jpg',
    };
    const component = mount(
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <VerticalCardInfo
          data={person}
          rowsToRender={[
            { name: 'Height', value: 189 },
            { name: 'Weight', value: 99 },
            { name: 'Species', value: 'MockedName' },
            { name: 'Home World', value: 'Hello World' },
          ]}
        />
      </ThemeContext.Provider>,
    );
    expect(component).toMatchInlineSnapshot();
  });
});
