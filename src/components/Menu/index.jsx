import React from 'react';
import { getComponentConstantsForLanguage } from '../../utils/utils';
import { WithLanguage } from '../HOCs';
import { NavLink } from 'react-router-dom';
import CONSTANTS from './../../constants';

const { LANGUAGE_CONSTANTS } = CONSTANTS;

const Menu = ({ language, setLanguage }) => {
  let MENU_LANGUAGE_CONSTANTS = getComponentConstantsForLanguage(
    LANGUAGE_CONSTANTS,
    'MENU',
    language
  );
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">{MENU_LANGUAGE_CONSTANTS.HOME}</NavLink>
        </li>
        <li>
          <NavLink to="/users">{MENU_LANGUAGE_CONSTANTS.USERS}</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">{MENU_LANGUAGE_CONSTANTS.SIGN_IN}</NavLink>
        </li>
        <li>
          <NavLink to="/load">{MENU_LANGUAGE_CONSTANTS.LOAD}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default WithLanguage(Menu);
