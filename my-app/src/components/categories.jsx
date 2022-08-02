import React from "react";

function Categories({categories}) {
    return categories && <div className ='news__main-categorie'>{categories.map((categorie) => <div>{categorie.name}</div>)}</div>
}

export default Categories;