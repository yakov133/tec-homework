import React, { Component } from 'react'
import Message from './Message'
import * as style from "./style.module.css"

export default class NumbersBtn extends Component {
    state={arr:[],show:false,count:0,results:""}
    timer;

    componentDidMount(){
        let tempArr=[];
        for (let index = 0; index < 10; index++) {
            tempArr.push({num:Math.floor(Math.random()*19+1),click:false});
        }
        this.setState({arr:tempArr});
        this.timer = setInterval(()=>{
            this.setState({count:this.state.count +1});
        },1000)
    }
    btnMaker = (item,i) => <button onClick={()=>this.disableOn(i)} disabled={this.state.arr[i].click} key={i} > {item.num} </button>
    
    disableOn=(i)=>{
        if(this.state.arr[i].num%2 === 0){
            let temp;
            temp = [...this.state.arr];
            temp[i].click=true;
            this.setState({arr:temp})
            this.gameOver();
        }
    }
    gameOver = ()=>{
        for (let index = 0; index < this.state.arr.length; index++) {
            if( !this.state.arr[index].click && (this.state.arr[index].num % 2) === 0)
                return false    
            
        }
        this.setState({show:true});

        clearInterval(this.timer);
        
        setTimeout(()=>{
            let arr = [];
            if(localStorage.result){
                arr = JSON.parse(localStorage.result)
            }
            arr.push(this.state.count);
            localStorage.setItem("result",JSON.stringify(arr));

            this.setState({show:false,count:0})
        },3000)
    }

    getResult = ()=>{
        let arr = [];
        if(localStorage.result){
            arr = JSON.parse(localStorage.result)
            let temp =[];
            for (let index = 0; index < arr.length; index++) {
                temp.push((<li>Game {index + 1} = {arr[index]} sec'</li>))
            }
            this.setState({results:temp});
        }else{
            alert("You need to play at least one Game!!!")
        }
    }
    restartGame = ()=>{
        clearInterval(this.timer);      
        this.setState({count:0,results:"",show:false})
        this.componentDidMount();
    }

    clearAll = ()=>{
        this.restartGame();
        localStorage.clear();
    }

    render() {
        return (
            <div>
                <h1>**Clicking Game**</h1>
                <h3>(click only the even numbers)</h3>
                <div className={style.marginNum}>
                    { this.state.arr.map( (item,i)=>this.btnMaker(item,i)) }
                </div>
                <p className={style.countNum}>{this.state.count}</p>
                <Message show={this.state.show}/>
                <div className={style.options}>
                <button onClick={this.getResult}>All Results</button>
                <button onClick={this.restartGame}>Restart here!</button>
                <button onClick={this.clearAll}>Clear All</button>
                </div>
                <ul>
                    {this.state.results}
                </ul>
            </div>
        )
    }
}
