import React from 'react';

function Photos({photo}) {
    return photo && <img className='news__main-photo' src={photo} />
}

export default Photos;