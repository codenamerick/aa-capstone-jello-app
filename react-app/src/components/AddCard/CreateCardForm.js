import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardActions from '../../store/boards';
import style from './AddCard.module.css';

const CreateCardForm = ({setAddCardActive, cardListId}) => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
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
        formData.append('description', 'Add a more detailed description...');
        formData.append('user_id', user_id);
        formData.append('list_id', cardListId);
        formData.append('board_id', boardId);

        await dispatch(boardActions.createCardThunk(formData));

        reset();
        setAddCardActive(false);
    };

    const handleClose = () => {
        setAddCardActive(false);
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
                    autoFocus
                    />
                </div>
                <div className={style.btnWrapper}>
                    <button type='submit' className={style.mainBtn}>Add Card</button>
                    <div onClick={handleClose} className={style.closeBtn}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateCardForm;
