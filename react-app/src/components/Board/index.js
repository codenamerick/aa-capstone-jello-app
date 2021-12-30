import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Link, useParams } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';
import BoardNavSeconday from './BoardNavSeconday';
import EditListModal from '../EditListModal';
import DeleteListBtn from '../DeleteListModal';
import CardsContainer from '../CardsContainer';

const Board = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.boards?.[boardId]?.lists);
    const [listId, setListId] = useState('');
    const [listMenuActive, setListMenuActive] = useState(false);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk());
    }, [dispatch])

    const editListBtn = (
        <EditListModal setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    const deleteListBtn = (
        <DeleteListBtn setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    return (
        <div className={style.boardWrapper}>
            <BoardNav />
            <BoardNavSeconday />
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
                            <CardsContainer />
                        </div>
                        <div>
                            <p>Add Card +</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default Board;
