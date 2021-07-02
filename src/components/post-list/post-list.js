import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDeletePr, onToggle}) => {

    const elements = posts.map((item) => {
        let classLists = "list-group-item"
        if (!item.display) {
            classLists += ' notVisible'
        }
        if (typeof item === 'object') {
            const {id, ...itemProps} = item; // деструктурируем объект, отделяем id от остального объекта
            return (
                <li key={id} className= {classLists}>
                    {/* <PostListItem label={item.label} important={item.important}/>  */}
                    <PostListItem 
                            {...itemProps}
                            onDelete = {()=> onDeletePr(id)}
                            onToggleImportant = {() => onToggle(id, 'important')}
                            onToggleLicked = {() => onToggle(id, 'like')}
                            />
                </li>
            )

        }
        
    })

    return (
        <ListGroup className = "app-list">
            {elements}

        </ListGroup>
    )
}

export default PostList;