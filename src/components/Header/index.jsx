import React from 'react';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import styles from './Header.module.scss';

import { withTheme, withUser } from '../HOCs';

import Menu from '../Menu';
import CONSTANTS from '../../constants';

const { THEME } = CONSTANTS;

const Header = ({ theme, setTheme, user: { ava } }) => {
  // !!! Теперь все контекстные поля будут приходить из HOC в виде пропсов в хедер !!!
  const classNames = cx(styles.header, {
    [styles.light]: theme === THEME.LIGHT,
    [styles.dark]: theme === THEME.DARK,
  });
  // Оптимизация, вынесли обработчик из jsx
  const handlerClickIcon = () => {
    setTheme();
  };
  // Оптимизация, вынесли логику иконки в отдельную переменную
  const currentIcon =
    theme === THEME.LIGHT ? mdiWhiteBalanceSunny : mdiWeatherNight;
  return (
    <header className={classNames}>
      <Menu />
      <Icon onClick={handlerClickIcon} path={currentIcon} size={1} />
      <img src={ava} alt="ava" />
    </header>
  );
};

// !!! Используем двойной HOC !!!
export default withUser(withTheme(Header));