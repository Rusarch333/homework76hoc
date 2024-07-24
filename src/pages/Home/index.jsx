import React from 'react';
import { WithTheme } from '../../components/HOCs';
import WindowWork from '../../components/WindowWork';
import Tree from '../../components/Tree';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = ({ theme }) => {
  // !!! Теперь все контекстные поля будут приходить из HOC в виде пропсов в хом !!!
  // Формируем переменную, а потом на её основе стили вместо классов
  const isLight = theme === THEME.LIGHT;
  const styles = {
    backgroundColor: isLight ? 'white' : 'black',
    color: isLight ? 'black' : 'white',
  };
  // Применяем стили
  return (
    <div style={styles}>
      <WindowWork />
      <Tree />
    </div>
  );
};

// Этот код используется в АППе, соответственно туда импортируется после експорта
/*
По сути в АППу передается вот такой анонимный компонент возвращаемый из HOCs - WithTheme (подробнее смотреть внутренню логику WithTheme):
(props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        // Возвращаем внутренний компонент (переданный как параметр), оборачивая его в тематический контекст
        // Поля с контекста передаем в внутренний компонент в виде пропсов
        // Не забываем также пробросить пропсы внутреннего компонента {...props} !!!
        <InnerComponent (наш HomePage) theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};
*/
// !!! То есть оборачивание в контекст теперь делаем не в этом компоненте (как на прошлом уроке), а в HOC-компоненте WithTheme !!!
export default WithTheme(HomePage);

