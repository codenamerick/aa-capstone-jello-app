import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as boardActions from '../../store/boards';
import "./MemberList.css";

const MemberList = ({boardId}) => {
    const dispatch = useDispatch();
    const boardMembers = useSelector(state => state.boards[boardId]?.member_list);
    const userId = useSelector(state => state.session.user.id);

    useEffect(() => {
        if (!boardMembers?.includes(userId)) {
            dispatch(boardActions.postMemberThunk(boardId));
        }
    })

    return (
        <div className='memberListWrapper'>
            {boardMembers?.map(member => (
                <div key={member.id} className='memberListAvatar' id={`member-${member.id}`}>
                    {member.username[0]}
                    <div className={`memberTooltip`} id={`member-tooltip-${member.id}`}>{member.username}</div>
                </div>
            ))}
        </div>
    );
}

export default MemberList;
