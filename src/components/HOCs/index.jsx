// Создали папку с HOC

// Наши HOC будут работать с контекстами
// А точнее они генерируют переданный им внутренний компонент, передавая ему определенный контекст!
import { ThemeContext, UserContext } from '../../contexts';

/*
  export const WithTheme = (InnerComponent) => {
    return (props) => {
      ...
    }
  }

  Здесь объявляется функция WithTheme, которая принимает в качестве аргумента компонент InnerComponent 
  и возвращает новый компонент, который в свою очередь принимает пропсы props.
*/
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
export const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        // Возвращаем внутренний компонент (переданный как параметр), оборачивая его в тематический контекст
        // Поля с контекста передаем в внутренний компонент в виде пропсов
        // Не забываем также пробросить пропсы внутреннего компонента {...props} !!!
        <InnerComponent theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};

// Тут все тоже самое что и выше
export const WithUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {(user) => <InnerComponent user={user} {...props} />}
    </UserContext.Consumer>
  );
};
