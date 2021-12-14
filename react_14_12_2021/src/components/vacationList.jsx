import { useState } from "react";
import * as style from "./vacation.module.css"
//line
const VacationList = () => {
  const [vacation, setVacation] = useState([{choice:"trip",status:true},{choice:"Eilat",status:false}]);
  const [selected,setSelected] = useState("");
  let newVacation = ""

  const handelSubmit = (e) => {
    e.preventDefault();
    if(newVacation){
        let arrOfVacation = [...vacation];
        arrOfVacation.push(newVacation);
        setVacation(arrOfVacation);
    }
  };

    
  const handelChange = (e) => {
    if (e.target.value !== "" && e.target.value[0] !== " ") {
        newVacation = {choice:e.target.value,status:false};
    }
  };

  const showAll=()=>{
    setSelected(vacation.map((item,i)=><li key={i} className={item.status ? style.line:""} onClick={()=>{
    let temp = [...vacation];
    temp[i].status = !temp[i].status;
    setVacation(temp);
    showAll();
    }
    }>{item.choice}</li>))
  }

  const showActive=()=>{
    setSelected(vacation.map((item,i)=>{
    if(!item.status)
    return (<li key={i} className={item.status ? style.line:""} onClick={()=>{
        let temp = [...vacation];
        temp[i].status = !temp[i].status;
        setVacation(temp);
        showAll();
        }
        }>{item.choice}</li>)
        return ""
    }))
}
const showCompeled=()=>{
    setSelected(vacation.map((item,i)=>{
        if(item.status)
        return (<li key={i} className={item.status ? style.line:""} onClick={()=>{
            let temp = [...vacation];
            temp[i].status = !temp[i].status;
            setVacation(temp);
            showAll();
            }
            }>{item.choice}</li>)
            return ""
        }))
}

  return (
    <div>
      <h1>Vactions Wish List</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="vacation">Enter Vaction:</label>
        <br />
        <input type="text" onBlur={handelChange} />
        <br />
        <button type="submit" disabled={!vacation.length ? true : false}>
          Add Vacation
        </button>
      </form>
      <ol>
      {selected}
      </ol>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <button onClick={showAll}>ALL</button>
          <button onClick={showActive}>Active</button>
          <button onClick={showCompeled}>Complted</button>
      </div>

      
    </div>
  );
};
export default VacationList;
