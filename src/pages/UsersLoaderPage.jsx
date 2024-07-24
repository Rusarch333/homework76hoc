import React from 'react';
import UsersLoader from '../components/UsersLoader';
import { WithTheme } from '../components/HOCs';
import CONSTANTS from '../constants';
const { THEME } = CONSTANTS;

// ТУТ ВСЕ ТОЖЕ САМОЕ КАК И С ДОМАШНЕЙ СТРАНИЧКОЙ !!!

const UsersLoaderPage = ({ theme }) => {
  // !!! Теперь все контекстные поля будут приходить из HOC в виде пропсов в ЮсерЛоадерПейдж !!!
  const isLight = theme === THEME.LIGHT;
  const styles = {
    backgroundColor: isLight ? 'white' : 'black',
    color: isLight ? 'black' : 'white',
  };
  return (
    <div style={styles}>
      <UsersLoader />
    </div>
  );
};

export default WithTheme(UsersLoaderPage);
