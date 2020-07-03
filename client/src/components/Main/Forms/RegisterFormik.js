import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Input, Icon } from 'semantic-ui-react';

import classnames from 'classnames';
import styles from './styles.module.scss';

/* import Button from '../../Button'; */
import Anchor from '../../Anchor';

const cx = classnames.bind(styles);

function handleRegister(values, register, { resetForm }) {
    const { username, email, password } = values;
    register(username, email, password);
    resetForm();
}

function validate(values) {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

const RegisterFormik = ({ register }) => (
    <div className={styles.wrapper}>
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) =>
                handleRegister(values, register, ...rest)
            }
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
                        <h1>Registrar conta</h1>
                    </div>


                            <Input
                            iconPosition="left"
                            placeholder="Usuário"
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

                    <div
                        className={cx(
                            styles.formGroup,
                            touched.email && errors.email && values.email !== ''
                                ? styles.error
                                : ''
                        )}
                    >
                        <Input
                            iconPosition="left"
                            placeholder="Email"
                            id="email"
                            fluid
                            size="massive"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                        >
                            <Icon name="at" />
                            <input />
                        </Input>
                    </div>

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
                    </div>

                    {isSubmitting && (
                        <button type="button">Sent with success</button>
                    )}
                    <div className={cx(styles.footer, styles.typographyButton)}>
                        <Anchor to="/login" colorAnchor="blue"></Anchor>
                        <Button
                            color="red"
                            content="Criar conta"
                            type="submit"
                            floated="center"
                            size="big"
                            icon="sign-out alternate"
                            labelPosition="center"
                        />
                    </div>
                </form>
            )}
        />
    </div>
);

RegisterFormik.propTypes = {
    register: PropTypes.func.isRequired
};

export default RegisterFormik;
