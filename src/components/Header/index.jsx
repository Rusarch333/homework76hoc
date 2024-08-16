import React from 'react';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import styles from './Header.module.scss';
import { WithTheme, WithUser, WithLanguage } from '../HOCs';
import Menu from '../Menu';
import CONSTANTS from '../../constants';

const { THEME, LANGUAGES } = CONSTANTS;

const Header = ({
  theme,
  toggleTheme,
  user: { ava },
  language,
  setLanguage,
}) => {
  // !!! Теперь все контекстные поля будут приходить из HOC в виде пропсов в хедер !!!
  const getThemeClass = (theme) =>
    cx({
      [styles.light]: theme === THEME.LIGHT,
      [styles.dark]: theme === THEME.DARK,
    });
  // Оптимизация, вынесли обработчик из jsx
  const classHeader = cx(styles.header, getThemeClass(theme));
  const handleClickThemeIcon = () => {
    toggleTheme();
  };
  const handleChangeLanguage = ({ target }) => {
    setLanguage(target.value);
  };
  const showLanguageOptions = (language, i) => (
    <option key={i} value={language}>
      {language}
    </option>
  );
  // Оптимизация, вынесли логику иконки в отдельную переменную
  const currentIcon =
    theme === THEME.LIGHT ? mdiWhiteBalanceSunny : mdiWeatherNight;
  return (
    <header className={classHeader}>
      <Menu />
      <select
        className={styles['header__language-select']}
        name="language-select"
        value={language}
        onChange={handleChangeLanguage}
      >
        {Object.values(LANGUAGES).map(showLanguageOptions)}
      </select>
      <Icon onClick={handleClickThemeIcon} path={currentIcon} size={1} />
      <img src={ava} alt="ava" />
    </header>
  );
};

// !!! Используем двойной HOC !!!
export default WithUser(WithTheme(WithLanguage(Header)));
