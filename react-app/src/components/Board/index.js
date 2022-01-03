import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';
import BoardNavSeconday from './BoardNavSeconday';
import EditListModal from '../EditListModal';
import DeleteListBtn from '../DeleteListModal';
import CardsContainer from '../CardsContainer';
import AddCardBtn from '../AddCard';
import CreateCardForm from '../AddCard/CreateCardForm';

const Board = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.boards?.[boardId]?.lists);
    const [listId, setListId] = useState('');
    const [listMenuActive, setListMenuActive] = useState(false);
    const [addCardActive, setAddCardActive] = useState(false);
    const [listIdOnCard, setListIdOnCard] = useState('');
    const currentBoard = useSelector((state) => state.boards?.[boardId]);
    const sessionUser = useSelector((state) => state.session);
    const currentBoardMembers = currentBoard?.members;
    const userId = sessionUser.user.id;
    const currentUsername = sessionUser.user.username;
    const history = useHistory();

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    const editListBtn = (
        <EditListModal setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    const deleteListBtn = (
        <DeleteListBtn setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    if (!currentBoardMembers?.includes(userId)) {
        history.push(`/${currentUsername}/boards`)
    }

    return (
        <div className={style.boardWrapper}>
            <BoardNav />
            <BoardNavSeconday currentBoard={currentBoard} />
            <div className={style.boardCanvas}>
                {lists?.map((list) => (
                    <div key={list.id} className={style.listWrapper}>
                        <div className={style.listHeader}>
                            <p>{list.name}</p>
                            <div>
                                <div id={`listMenuBtn-${list.id}`} className={style.listMenuBtn} onClick={() => {setListId(list.id);setListMenuActive(true);}}>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                                {listMenuActive && (
                                    <div>
                                        {listId === list.id && (
                                            <>
                                                <div className={style.listMenuModalBg} onClick={() => setListMenuActive(false)}></div>
                                                <div id={`list-menu-${list.id}`} className={style.listMenuWrapper}>
                                                    {editListBtn}
                                                    {deleteListBtn}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={style.cardsComponentWrapper}>
                            <CardsContainer list={list}/>
                        </div>
                        <div>
                            {addCardActive && listIdOnCard === list.id ? <CreateCardForm setAddCardActive={setAddCardActive} cardListId={list.id} /> : <AddCardBtn setAddCardActive={setAddCardActive} setListIdOnCard={setListIdOnCard} cardListId={list.id} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default Board;
