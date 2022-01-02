import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as boardActions from '../../store/boards';
import style from './EditCard.module.css';

const EditCardDescriptionForm = ({setEditCardDescription, selectedCard}) => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session);
    const user_id = sessionUser['user'].id;
    const [description, setDescription] = useState(selectedCard.description);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validationErrors = [];

        if (selectedCard.name.length > 50) {
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

        formData.append('name', selectedCard.name);
        formData.append('user_id', user_id);
        // formData.append('list_id', cardListId);
        formData.append('board_id', boardId);

        await dispatch(boardActions.createCardThunk(formData));

        // setAddCardActive(false);
        setEditCardDescription(false);
    };

    // const handleClose = () => {
    //     setAddCardActive(false);
    // };

    return (
        <div className={style.editCardDescriptionForm}>
            <form onSubmit={handleSubmit}>
                <div className={style.formErrors}>
                    {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
                </div>
                <div className={style.inputWrapper}>
                    <textarea
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={() => setEditCardDescription(false)}
                    autoFocus
                    ></textarea>
                </div>
                {/* <div className={style.btnWrapper}>
                    <button type='submit' className={style.mainBtn}>Add Card</button>
                    <div onClick={handleClose} className={style.closBtn}>
                        <i className="fas fa-times"></i>
                    </div>
                </div> */}
            </form>
        </div>
    );
};

export default EditCardDescriptionForm;
