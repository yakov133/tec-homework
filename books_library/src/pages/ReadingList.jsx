import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import style from "./CSS/booksList.module.css"

const ReadingList = ({bookslist,setbookslist,readinglist,setreadinglist,completedlist,setcompletedlist,setdetails})=>{
    const [array, setarray] = useState([]);
    const [flage, setflage] = useState(false)
    
    const copeyAndUpdate =()=>{
        let temp = bookslist.filter((book)=>{
            if(readinglist.includes(book.ID))
                return book;
        })
        setarray(temp);
    } 

    useEffect(()=>{
        copeyAndUpdate();
    },[])
    useEffect(()=>{
        copeyAndUpdate();
    },[readinglist])

    
    if(flage){
        return <Redirect to={"/Details"}/>
    }
    const changeFlag = (ID)=>{
        let temp = [...bookslist];
        for (let index = 0; index < temp.length; index++) {
            if(temp[index].ID===ID){
                temp[index].flagPlus=!temp[index].flagPlus;
                setbookslist(temp);
            }    
        }
    }
    
    const Details =(ID)=>{
        for (let index = 0; index < bookslist.length; index++) {
            if(bookslist[index].ID===ID){
                setdetails(bookslist[index]);
                break;
            }
        }
        setflage(true)
    }

    const MoveToComplited = (ID)=>{
    let temp = [...readinglist];
    let found = false;
    for (let index = 0; index < temp.length; index++) {
        if(temp[index]===ID){
            temp.splice(index,1);
            setreadinglist(temp);
            found = true;
            break;
        }
    }
    if(found){
        temp = [...completedlist];
        let exist = false;
        for (let index = 0; index < temp.length; index++) {
            if(temp[index]===ID){
                exist = true;
                break
            }
        }
        if(!exist){
        temp.push(ID);
        setcompletedlist(temp);
        }
        changeFlag(ID);
    } 
}
const RemoveFromList = (ID)=>{
    let temp = [...readinglist];
        for (let index = 0; index < temp.length; index++) {
            console.log(temp[index]);
            if(temp[index] === ID){
                temp.splice(index,1);
                setreadinglist(temp);
                break;
            }
        }
        temp = [...bookslist];
        for (let index = 0; index < temp.length; index++) {
            if(temp[index].ID === ID ){
                temp[index].flagPlus = false
                setbookslist(temp);
                break;
            }
        }
}


    return(
        <div>
            <h1>Reading List</h1>
            
            <div>
            {array.map((book,i)=>{return <div key={i} >
                    <div>
                        <button onClick={()=>MoveToComplited(book.ID)} title="Mark has read">move to completed</button>
                        <button onClick={()=>RemoveFromList(book.ID)} title="remove from reading list">remove</button>
                    </div>
                        <div onClick={()=>Details(book.ID)} title="More Details">
                        <p>Title: {book.Title}</p>
                        <img className={style.img_Booklist} src={book.imgUrl} alt="reading book" title={book.Title+ " By " + book.Author} />
                        <p>Author: {book.Author}</p>
                        <p>Description : {book.Plotsummary.slice(0,150)+<br/>+book.Plotsummary.slice(150,600)+"...."}</p>
                        </div>
                    </div>})
                }
            </div>
        </div>)
}
export default ReadingList;