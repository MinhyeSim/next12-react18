import React,{useState} from "react";
import style from "game/style/game-list.module.css"

export default function getGames() {
    const [inputs,setInputs] = useState({})
    const {team} = inputs;

    return (<><h1>Game</h1>
    
    <label><b>name</b></label>
    <input id = "name" type=""/><br/>
    
    </>
    )




}