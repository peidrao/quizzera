import React from 'react';
import { Formik } from 'formik';
import { PropTypes } from 'prop-types';

import classnames from 'classnames';
import styles from './styles.module.scss';

/* mport Button from '../../Button'; */
import Anchor from '../../Anchor';
import { Icon, Input, Button } from 'semantic-ui-react';

const cx = classnames.bind(styles);

function handleLogin(values, login, { resetForm }) {
    const { username, password } = values;
    login(username, password);
    resetForm();
}

function validate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

const LoginFormik = ({ login }) => (
    <div className={styles.wrapper}>
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) => handleLogin(values, login, ...rest)}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.formTitle}>
                        <h1>Login</h1>
                    </div>

    
                        <Input
                            iconPosition="left"
                            placeholder="username"
                            id="username"
                            fluid
                            size="massive"
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            required
                        >
                            <Icon name="user" />
                            <input />
                        </Input>

                        {/*     <span
                            className={cx(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            Required
                        </span> */}
                

                    <div
                        className={cx(
                            styles.formGroup,
                            touched.password &&
                                errors.password &&
                                values.password !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <Input
                            iconPosition="left"
                            fluid
                            size="massive"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Senha"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            required
                        >
                            <Icon name="key" />
                            <input />
                        </Input>

                        {/*     <label
                            htmlFor="password"
                            className={cx(
                                styles.label,
                                values.password !== '' && styles.labelTop,
                                styles.typographyCaption
                            )}
                        >
                            Password
                        </label> */}
                        {/*     <span
                            className={cx(
                                styles.help,
                                styles.typographyCaption
                            )}
                        >
                            Required
                        </span> */}
                    </div>

                    {isSubmitting && (
                        <button type="button">Sent with success</button>
                    )}
                    <div className={cx(styles.footer, styles.typographyButton)}>
                        <Anchor to="/register" colorAnchor="blue">
                            Crie uma conta agora
                        </Anchor>
                        <Button
                            color="red"
                            content="Login"
                            type="submit"
                            floated="center"
                            size="big"
                            icon="sign-in"
                            labelPosition="center"
                        />

                        {/*  <Button type="submit" label="Login" /> */}
                    </div>
                    <div
                        className={cx(styles.options, styles.typographyButton)}
                    />
                </form>
            )}
        />
    </div>
);

LoginFormik.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginFormik;
