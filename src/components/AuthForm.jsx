function AuthForm({ title, formName, onSubmit, formValue, onChange, btnText, children }) {
    return (
        <div className="login">
            <h2 className="login__title">
                {title}
            </h2>
            <form onSubmit={onSubmit} className="login__form" name={formName}>
                <fieldset className='login__box'>
                    <input
                        value={formValue.email}
                        id="email"
                        name="email"
                        type="email"
                        className='login__input'
                        placeholder='Email'
                        minLength={3}
                        maxLength={40}
                        onChange={onChange}
                        required />
                    <input
                        value={formValue.password}
                        id="password"
                        name="password"
                        type="password"
                        className='login__input'
                        onChange={onChange}
                        placeholder='Пароль'
                        minLength={6}
                        maxLength={20}
                        required />
                    <button
                        type="submit"
                        className="login__button"
                    >{btnText}</button>
                </fieldset>
                {children}
            </form>
        </div >
    )
}

export default AuthForm;