import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from '../CreateBoardModal/CreateBoard.module.css';

const EditBoardForm = ({setShowMainModal, boardCardId, setBoardMenuActive}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session);
    const boards = useSelector((state) => Object.values(state.boards));
    const board = boards.find(({id}) => id === +boardCardId)
    const user_id = sessionUser['user'].id
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);

    console.log('CURRENT BOARD---: ', board)

    const validate = () => {
        const validationErrors = [];

        if (name.length > 50) {
            validationErrors.push('name: Board name should be less than 50 characters.')
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

        // const newBoard = await dispatch(boardActions.createBoardThunk(formData));

        setShowMainModal(false);
        setBoardMenuActive(false);
        // history.push(`/boards/${newBoard.id}`)
    };

    const handleClose = () => {
        setShowMainModal(false);
        setBoardMenuActive(false);
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
                    <div className={style.inputWrapper}>
                        <label htmlFor='name'>Edit Board Name</label>
                        <input
                        name='name'
                        type='text'
                        value={board.name}
                        onChange={(e) => setName(e.target.value)} required
                        />
                    </div>
                    <div className={style.inputWrapper}>
                        <button type='submit' className={style.mainBtn}>Save</button>
                        <p onClick={handleClose}>Cancel</p>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default EditBoardForm;
