import React, { useState } from 'react';

import { ReplyContainer, ReplyWrapper, ReplyContent, ReplyHeader, ReplyBody, OptionsContainer, RepliesContainer } from './Reply.styles';

import Counter from '../counter/Counter';
import OptionButton from '../optionButton/OptionButton';

import avatar from '../../assets/avatars/image-amyrobson.png';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon-delete.svg';
import { ReactComponent as ReplyIcon } from '../../assets/icons/icon-reply.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/icon-edit.svg';
import ReplyEditor from '../replyEditor/ReplyEditor';

const comment = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.";

const Reply = () => {
    const [isEditable, setIsEditable] = useState(false);
    const toggleIsEditable = () => setIsEditable((prevState) => !prevState);

    return (
        <>
            <ReplyContainer>
                <ReplyWrapper>
                    <Counter />
                    <ReplyContent>
                        <ReplyHeader>
                            <img src={avatar} alt="user" />
                            <p className="user-name">amyrobson</p>
                            <p className="time-ago">1 month ago</p>
                        </ReplyHeader>
                        <ReplyBody>
                            {!isEditable && <p className="comment-text">{comment}</p>}
                            {isEditable && <textarea rows="3" placeholder={comment}></textarea>}
                        </ReplyBody>
                    </ReplyContent>
                    <OptionsContainer>
                        <OptionButton buttonType="delete" Icon={DeleteIcon} />
                        <OptionButton buttonType="reply" Icon={ReplyIcon} />
                        <OptionButton buttonType="edit" Icon={EditIcon} handleClick={toggleIsEditable} />
                    </OptionsContainer>
                </ReplyWrapper>
                <RepliesContainer>
                    {/* <Reply /> */}
                </RepliesContainer>
            </ReplyContainer>
            {/* <ReplyEditor /> */}
        </>
    );
}

export default Reply;
