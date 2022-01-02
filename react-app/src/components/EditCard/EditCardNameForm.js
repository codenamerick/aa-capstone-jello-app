import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardActions from '../../store/boards';
import style from './EditCard.module.css';

const EditCardNameForm = ({setEditCardName, selectedCard}) => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session);
    const user_id = sessionUser['user'].id;
    const [name, setName] = useState(selectedCard.name);
    const [errors, setErrors] = useState([]);
    const cardId = selectedCard.id;

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
        formData.append('description', selectedCard.description);
        formData.append('user_id', user_id);
        formData.append('listId', selectedCard.list_id);
        formData.append('boardId', boardId);
        formData.append('cardId', cardId);

        await dispatch(boardActions.editCardThunk(formData, +boardId));

        setEditCardName(false);
    };

    return (
        <div className={style.editCardForm}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)} required
                    onBlur={() => setEditCardName(false)}
                    autoFocus
                    />
                </div>
            </form>
        </div>
    );
};

export default EditCardNameForm;
