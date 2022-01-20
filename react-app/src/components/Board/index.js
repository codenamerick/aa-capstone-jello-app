import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import * as boardActions from '../../store/boards';
import style from "./Board.module.css";
import BoardNav from './BoardNav';
import BoardNavSeconday from './BoardNavSeconday';
import EditListModal from '../EditListModal';
import DeleteListBtn from '../DeleteListModal';
import CardsContainer from '../CardsContainer';
import AddCardBtn from '../AddCard';
import CreateCardForm from '../AddCard/CreateCardForm';
import {DragDropContext} from 'react-beautiful-dnd';

const Board = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.boards?.[boardId]?.lists);
    const [listId, setListId] = useState('');
    const [dragListIndex, setDragListIndex] = useState('');
    const [listMenuActive, setListMenuActive] = useState(false);
    const [addCardActive, setAddCardActive] = useState(false);
    const [listIdOnCard, setListIdOnCard] = useState('');
    const currentBoard = useSelector((state) => state.boards?.[boardId]);
    const sessionUser = useSelector((state) => state.session);
    const currentBoardMembers = currentBoard?.members;
    const userId = sessionUser.user.id;
    const currentUsername = sessionUser.user.username;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(boardActions.getBoardsThunk())
        .then(() => setIsLoaded(true));

    }, [dispatch])

    const editListBtn = (
        <EditListModal setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    const deleteListBtn = (
        <DeleteListBtn setListMenuActive={setListMenuActive} listMenuActive={listMenuActive} listId={listId} />
    );

    const onDragEnd = async (res) => {
        const {destination, source, draggableId} = res;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        // const list = lists[listIndex];
        // console.log('LIST', res);

        // const newCards = list.cards.slice();
        // console.log('cards COPY---: ', newCards);

        // newCards.splice(source.index, 1);
        // newCards.splice(destination.index, 0, draggableId);

        // trying to update board state with rearranged cards

        await dispatch(boardActions.dragCardThunk(boardId, dragListIndex, source.droppableId, destination.droppableId, source.index, destination.index, draggableId));

        // const newList = {
        //     ...list,
        //     cards: newCards,
        // };

        // console.log('New LIST---: ', newList);

        // const newState = {
        //     ...state,
        //     lists: {
        //         ...state.lists,
        //         [newList.id]: newList,
        //     },
        // };

        // setState(newState);
    };

    return (
        <>
        {isLoaded && (
            <>
        {currentBoardMembers?.includes(userId) ?
            <div className={style.boardWrapper}>
                <BoardNav />
                <BoardNavSeconday currentBoard={currentBoard} />
                <div className={style.boardCanvas}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {lists?.map((list, index) => (
                            <div key={list.id} className={style.listWrapper} onMouseOver={() => {setDragListIndex(index)}}>
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
                    </DragDropContext>
                </div>
            </div>
            :
            <Redirect to={`/${currentUsername}/boards`} />}
            </>
            )}
            </>
    )
};


export default Board;
