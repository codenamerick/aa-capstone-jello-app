import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import * as boardActions from '../../store/boards';
import style from '../CreateBoardModal/CreateBoard.module.css';

const EditListForm = ({setShowMainModal, listId, setListMenuActive}) => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session);
    // const boards = useSelector((state) => Object.values(state.boards));
    // const board = boards.find(({id}) => id === +boardId);
    // const lists = board.lists;
    // const list = lists.find(({id}) => id === +listId);
    console.log('List from EDIT LIST---: ', listId)

    const user_id = sessionUser['user'].id
    // const [name, setName] = useState(board.name);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validationErrors = [];

        // if (name.length > 50) {
        //     validationErrors.push('name: List name should be less than 50 characters.')
        // }

        return validationErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = validate();

        if (errors.length > 0) {
            return setErrors(errors);
        }

        const formData = new FormData();

        // formData.append('name', name);
        formData.append('user_id', user_id);
        formData.append('board_id', boardId)

        // await dispatch(boardActions.editListThunk(formData));

        setShowMainModal(false);
        setListMenuActive(false);
    };

    const handleClose = () => {
        setShowMainModal(false);
        setListMenuActive(false);
    };

    return (
        <div className={style.formWrapper}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={style.formErrors}>
                        {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <p className={style.modalHeading}>Edit List</p>
                    {/* <div className={style.inputWrapper}>
                        <label htmlFor='name'>List Name</label>
                        <input
                        name='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)} required
                        />
                    </div> */}
                    <div className={style.inputWrapper}>
                        <button type='submit' className={style.mainBtn}>Save</button>
                        <p onClick={handleClose}>Cancel</p>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default EditListForm;
