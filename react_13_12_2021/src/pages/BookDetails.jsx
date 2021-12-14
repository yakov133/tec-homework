import * as style from "./CSS/bookdetails.module.css"

const BookDetails = (props)=>{
    return <div>
        <h1>Book Details</h1>
        <img className={style.imgStyle} src={props.book.imgSrc} alt="" />
        <p><span className={style.Name}>Name:</span> {props.book.bookName} </p>
        <p><span className={style.Author}>Author:</span> {props.book.author}</p>
        <p> <span className={style.Pages}>Pages:</span> {props.book.pagesNum}    </p>
        <p><span className={style.Summary}>Summary:</span> {props.book.info}</p>
        
    </div>;

}

export default BookDetails