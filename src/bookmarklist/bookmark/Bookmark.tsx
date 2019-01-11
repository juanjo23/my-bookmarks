import React, { useState } from 'react';
import './Bookmark.scss';
import BookmarkModel from '../../bookmark';
import { IconPlus, EditIcon, RemoveIcon } from '../../icons/Icons';

type BookmarkProps = {
  bookmark: BookmarkModel;
  handleAddEdit: (bookmark: BookmarkModel) => void;
  handleRemove: (bookmarkKey: number) => void;
}
export const Bookmark = ({bookmark, handleAddEdit, handleRemove}: BookmarkProps) => {
  const [displayCTAS, setDisplayCTAS] = useState(false);
  const style = {
    backgroundImage: `url('${bookmark.iconUrl}')`,
    backgroundColor: bookmark.backColor,
  };
  return bookmark.isEmpty?
    <button className="Bookmark empty" onClick={() => handleAddEdit(bookmark)}>
      <IconPlus className="add-icon"></IconPlus>
    </button> :
    <div className="Bookmark filled" style={style}>
      <a href={bookmark.url} target={bookmark.isExternal ? '_blank' : '_self'} rel="noopener noreferrer"
        onFocus={() => setDisplayCTAS(true)}>
        {bookmark.value && <span className="overlay"> {bookmark.value} </span> }
      </a>
      <div className="ctas" style={displayCTAS ? {display: 'block'}: {}}>
        <button className="cta-button" onClick={() => handleAddEdit(bookmark)}>
          <EditIcon className="edit-icon"></EditIcon>
        </button>
        <button className="cta-button" onClick={() => handleRemove(bookmark.key)}>
          <RemoveIcon className="edit-icon"></RemoveIcon>
        </button>
      </div>
    </div>
};