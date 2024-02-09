import React, { useState } from 'react';

import avatar from '../../assets/avatars/image-amyrobson.png';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ReplyIcon } from '../../assets/icons/icon-reply.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/icon-edit.svg';

import { CommentContainer, CommentWrapper, CommentContent, CommentHeader, CommentBody, OptionsContainer, RepliesContainer, SupportLine } from './Comment.styles';

import Counter from '../counter/Counter';
import OptionButton from '../optionButton/OptionButton';
import ReplyEditor from '../replyEditor/ReplyEditor';
import Reply from '../reply/Reply';

const comment = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.";

const Comment = () => {
    const [isEditable, setIsEditable] = useState(false);
    const toggleIsEditable = () => setIsEditable((prevState) => !prevState);

    return (
        <>
            <CommentContainer>
                <CommentWrapper>
                    <Counter />
                    <CommentContent>
                        <CommentHeader>
                            <img src={avatar} alt="user" />
                            <p className="user-name">amyrobson</p>
                            <p className="time-ago">1 month ago</p>
                        </CommentHeader>
                        <CommentBody>
                            {!isEditable && <p className="comment-text">{comment}</p>}
                            {isEditable && <textarea rows="3" placeholder={comment}></textarea>}
                        </CommentBody>
                    </CommentContent>
                    <OptionsContainer>
                        <OptionButton buttonType="delete" Icon={DeleteIcon} />
                        <OptionButton buttonType="reply" Icon={ReplyIcon} />
                        <OptionButton buttonType="edit" Icon={EditIcon} handleClick={toggleIsEditable} />
                    </OptionsContainer>
                </CommentWrapper>
                <RepliesContainer>
                    <Reply />
                    <Reply />
                    <Reply />
                    <SupportLine className="support-line" />
                </RepliesContainer>
            </CommentContainer>
            <ReplyEditor />
        </>
    );
}

export default Comment;
