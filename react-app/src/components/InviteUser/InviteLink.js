import React from 'react';
import style from './InviteUser.module.css';

export default function InviteLink({setShowMainModal, boardId}) {

    return (
        <>
            <div
                className={style.joinBoardBackground}
                onClick={() => setShowMainModal(false)}
            >
            </div>
            <div className={style.joinBoardContainer}>
                <form
                    className={style.joinBoardForm}
                >
                    <div
                        className={style.joinBoardCloseContainer}
                        onClick={() => setShowMainModal(false)}
                    >
                        <svg
                            className={style.joinBoardX}
                            aria-hidden="false"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                            d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                            ></path>
                        </svg>
                    </div>
                    <div className={style.joinBoardHeading}>
                        <div className={style.joinBoardTitle}>Send An Invite</div>
                        <div className={style.joinBoardSubheading}>
                            Copy the link and send to others.
                        </div>
                    </div>
                    <div className={style.joinBoardContent}>
                        <div className={style.joinBoardInputWrapper}>
                            <label className={style.joinBoardLabel}>INVITE LINK</label>
                            <input
                                className={style.joinBoardInputField}
                                type='text'
                                placeholder={`https://jello-io.herokuapp.com/boards/${boardId}`}
                                value={`https://jello-io.herokuapp.com/boards/${boardId}`}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
