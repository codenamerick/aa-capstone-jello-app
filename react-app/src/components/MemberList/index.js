import React from 'react';
import { useSelector } from 'react-redux';
import "./MemberList.css";

const MemberList = ({boardId}) => {
    const boardMembers = useSelector(state => state.boards[boardId].member_list);

    return (
        <div className='memberListWrapper'>
            {boardMembers.map(member => (
                <div key={member.id} className='memberListAvatar' id={`member-${member.id}`}>
                    {member.username[0]}
                    <div className={`memberTooltip`} id={`member-tooltip-${member.id}`}>{member.username}</div>
                </div>
            ))}
        </div>
    );
}

export default MemberList;
