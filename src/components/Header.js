import { Link, withRouter, Switch, Route } from 'react-router-dom';

function Header({ email, signOut }) {
  return (
    <header className="header">
      <div className="header__logo" />
      <div className="header__link-wrapper">
        {
          <Switch>
            <Route path="/sign-in">
              <Link to="/sign-up" className="header__link">
                Зарегистрироваться
              </Link>
            </Route>
            <Route path="/sign-up">
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            </Route>
            <Route path="/">
              <>
                <p className="header__mail">{email}</p>
                <button to="/sign-in" className="header__link header__link_logged-in" onClick={signOut}>
                  Выйти
                </button>
              </>
            </Route>
          </Switch>
        }
      </div>
    </header>
  );
}

export default withRouter(Header);
