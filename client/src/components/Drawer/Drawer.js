import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

const Drawer = ({ user, show, handleLogout }) => (
    <div className={cx(styles.drawer, show ? [styles.drawerShow] : '')}>
        <div className={styles.header}>{/*   <h5>Quizzera</h5> */}</div>
        <div className={cx(styles.links, styles.typographySubtitle1)}>
            <li>
                <ul>
                    <NavLink
                        exact
                        to="/"
                        className={styles.anchor}
                        activeClassName={styles.selected}
                    >
                        <div className={styles.unselected}>
                            <FontAwesomeIcon
                                icon="home"
                                className={styles.margin}
                            />
                            início
                        </div>
                    </NavLink>
                </ul>

                {Object.keys(user).length ? (
                    <>
                        <ul>
                            <NavLink
                                exact
                                to="/go-quiz"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="question"
                                        className={styles.margin}
                                    />{' '}
                                    Go Quiz
                                </div>{' '}
                            </NavLink>
                        </ul>
                        <ul>
                            <a
                                className={styles.anchor}
                                activeClassName={styles.selected}
                                onClick={handleLogout}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        className={styles.margin}
                                    />{' '}
                                    Sair
                                </div>{' '}
                            </a>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul>
                            <NavLink
                                exact
                                to="/login"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-circle"
                                        className={styles.margin}
                                    />{' '}
                                    Entrar
                                </div>
                            </NavLink>
                        </ul>
                        <ul>
                            <NavLink
                                exact
                                to="/register"
                                className={styles.anchor}
                                activeClassName={styles.selected}
                            >
                                <div className={styles.unselected}>
                                    <FontAwesomeIcon
                                        icon="user-plus"
                                        className={styles.margin}
                                    />{' '}
                                    Criar conta
                                </div>
                            </NavLink>
                        </ul>
                    </>
                )}
            </li>
        </div>
    </div>
);

export default Drawer;
