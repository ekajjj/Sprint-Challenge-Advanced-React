import React from 'react';
import Card from "./Card";
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    shallow(<Card />);
  });// Square/square.test.js