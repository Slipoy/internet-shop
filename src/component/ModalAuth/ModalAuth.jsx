import React, {useState} from "react";
import Portal from "../portal/portal";
import style from "./modalAuth.module.css"
import {connect} from "react-redux";
import reducerLog, {logIn} from "../../reduse-store/reducer";

const ModalAuth = ({onClose, logIn})=>{
    const [data, setData] = useState({
        login:'',
        password:''
    })
    const handleChange = (e)=>{
        const {value, name} =e.target
        setData({
            ...data,
            [name]: value
        })
        console.log(e.target)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(data)
        onClose();
    }
    console.log(data)

    return(
        <Portal>
            <div className={`${style.modal} ${style.modalAuth}`}>
                <div className={style.modalAuth}>
                    <button className={style.closeAuth} onClick={onClose}>&times;</button>
                    <form id="logInForm" onSubmit={handleSubmit} >
                        <fieldset className={style.modalBody}>
                            <legend className={style.modalTitle}>Авторизация</legend>
                            <label className={style.modalLableAuth}>
                                <span>Логин</span>
                                <input name="login" type="text" value={data.login} onChange={handleChange}/>
                            </label>
                            <label className={style.modalLableAuth}>
                                <span>Пароль</span>
                                <input name="password" type="password" value={data.password} onChange={handleChange}/>
                            </label>
                        </fieldset>
                        <div className="modal-footer">
                            <div className={style.footerBtn}>
                                <button className={style.btnLogin} type="submit" >Войти</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Portal>
    )
}


export default connect(null, {logIn})(ModalAuth)