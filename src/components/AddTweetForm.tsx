import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
import { useHomeStyles } from '../Pages/Home';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import TextAreaAutorize from '@material-ui/core/TextareaAutosize';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import { number } from 'prop-types';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>('');
  const textLimit = Math.round((text.length / 280) * 100);
  const maxLength = MAX_LENGTH - text.length;

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleAddTweet = (): void => {
    setText('');
  };

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`аватар`}
          src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"
        />
        <TextAreaAutorize
          onChange={handleChangeTextarea}
          value={text}
          className={classes.addFormTextArea}
          placeholder="Что происходит?"
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classnames(classes.tweetFooter, classes.addFormBottomAction)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{maxLength}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={4}
                  value={text.length >= MAX_LENGTH ? 100 : textLimit}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="static"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleAddTweet}
            disabled={text.length >= MAX_LENGTH}
            color="primary"
            variant="contained">
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
