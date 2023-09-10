import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {BiHomeSmile} from "react-icons/bi"
import {useForm} from "react-hook-form";
import axios from "axios";
import instance from "../../../utils/instance";
import {loginAcc} from "../../../redux/reducers/user";
import {useDispatch} from "react-redux";



const Login = () => {



    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        instance.post(`/login`,data)
            .then(resolve => {
                dispatch(loginAcc({
                        ...resolve.data.user,
                        token: resolve.data.accessToken
                    },

                ))
                navigate("/")
                localStorage.setItem("user",JSON.stringify({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }))

            })
            .catch((error) => alert(error))
    }




    return (
        <section className="login">
            <div className="login__block">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form" >
                    <h2>Логин</h2>
                    <div className="login__form-block">
                        <input {...register('email',{
                            required: {
                                message: 'Email обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                message: 'Минимум 10 символа',
                                value: 10
                            },
                            pattern: {
                                message: 'Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })} type="email" className="login__form-input" placeholder="Ввести email"/>
                        <p className='register__form-error'>
                            {errors.email && errors.email?.message}
                        </p>
                    </div>

                    <div className="login__form-block">
                        <input  {...register('password', {
                            required: {
                                message: "Пароль обязателен к заполнению",
                                value: true
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                            }
                        })} type="password" className="login__form-input" placeholder="Ввести пароль"/>
                        <p className='register__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </div>
                    <div className="login__form-block">
                        <button className="login__form-btn" type={"submit"}>
                            Войти
                        </button>
                    </div>
                    <p className="login__reg">
                        Нет профиля ?
                        <Link className="login__reg-link" to={'/register'}>
                            пройдите регистрацию
                        </Link>
                    </p>

                </form>
                <div className="login__route">
                    <BiHomeSmile className="login__route-icon"/>
                    <Link className="login__route-link" to={'/'}>
                        Вернуться на главную страницу
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Login;