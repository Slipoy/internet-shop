import React from "react";
import Portal from "../portal/portal";
import style from  './modalBasket.module.css'
import {connect} from "react-redux";
import {changeCounter, deleteItem} from "../../reduse-store/basket";






const ModalBasket= ({basket, onClose,changeCounter,deleteItem})=>{
    const totalPrice = basket?.reduce((prev, acc) => prev + acc.price * acc.count, 0);
    return(
        <Portal>
            <div className={style.modal}>
                <div className={style.modalBasket}>
                    <div className={style.modalHeader}>
                        <h3>Корзина</h3>
                        <button className={style.closeModal} onClick={onClose}>&times;</button>
                    </div>
                    <div className={style.modalBody}>
                        <ul>
                            {basket.length > 0 ? basket.map(item => <li key={item.id} className={style.listItem}>
                                <span className={style.foodName}>{item.title}</span>
                                <span className={style.foodPrice}>{item.price * item.count}$</span>
                                <div className={style.foodCounter}>
                                    <button className={style.counterBtn} onClick={()=>changeCounter(item.id, -1, item.count)}>-</button>
                                    <span className={style.counter}>{item.count}</span>
                                    <button className={style.counterBtn} onClick={()=>changeCounter(item.id, 1, item.count)}>+</button>
                                    <button className={style.counterBtn} onClick={()=>deleteItem(item.id)}>&times;</button>
                                </div>
                            </li>): <h3>Корзина пустая</h3>
                            }
                        </ul>
                    </div>
                    <div className={style.modalFooter}>
                        <span className={style.modalPricetag}>{totalPrice}$</span>
                        <div>
                            <button>Оформить заказ</button>
                            <button>Отмена</button>

                        </div>
                    </div>

                </div>
            </div>


        </Portal>
    )
}
let mapStateToProps = (state) => {
    return {
        basket: state.basketReducer.basket
    }
}
export default connect (mapStateToProps, {changeCounter,deleteItem})(ModalBasket)
