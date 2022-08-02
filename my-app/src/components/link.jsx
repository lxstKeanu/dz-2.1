import React from 'react';

function Links({links}) {
    return links && <a className ='news__main-link' href={links}>link</a>
}

export default Links;
