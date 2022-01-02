import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from './AddCard.module.css';

const CreateCardForm = () => {
    // const [showMainModal, setShowMainModal] = useState(false);
    // const [cardId, setCardId] = useState('');
    const sessionUser = useSelector(state => state.session);
    const user_id = sessionUser['user'].id;
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setName('');
    };

    const validate = () => {
        const validationErrors = [];

        if (name.length > 50) {
            validationErrors.push('name: Card name should be less than 50 characters.')
        }

        return validationErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = validate();

        if (errors.length > 0) {
            return setErrors(errors);
        }

        const formData = new FormData();

        formData.append('name', name);
        formData.append('user_id', user_id);
        // formData.append('board_id', boardId);

        // await dispatch(boardActions.createListThunk(formData));

        reset();
        // setShowMainModal(false);
    };

    const handleClose = () => {
        // setShowMainModal(false);
    };

    return (
        <div className={style.createCardForm}>
            <form onSubmit={handleSubmit}>
                <div className={style.formErrors}>
                    {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className={style.inputWrapper}>
                    <input
                    name='name'
                    type='text'
                    placeholder='Enter a title for this card...'
                    value={name}
                    onChange={(e) => setName(e.target.value)} required
                    />
                </div>
                <div className={style.btnWrapper}>
                    <button type='submit' className={style.mainBtn}>Add Card</button>
                    <div onClick={handleClose} className={style.closBtn}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateCardForm;
