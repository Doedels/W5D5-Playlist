import React from 'react';

const input = (props) => {
    return (
        <div>
            <div className={'header'}>
                <input type='text' name='titel' defaultValue='titel' onChange={props.inputHandler} ></input>
                <input type='text' name='artiest' defaultValue='artiest' onChange={props.inputHandler} ></input>
                <select name='genre' onChange={props.inputHandler}>
                    <option value="genre">genre</option>
                    <option value="klassiek">klassiek</option>
                    <option value="jazz">jazz</option>
                    <option value="disco">disco</option>
                    <option value="rock">rock</option>
                </select>
                <select name='rating' onChange={props.inputHandler}>
                    <option value="*">*</option>
                    <option value="**">**</option>
                    <option value="***">***</option>
                    <option value="****">****</option>
                    <option value="*****">*****</option>
                </select>
            </div><br />
            <button className={'toevoegenBtn'} onClick={props.addSongHandler} >TOEVOEGEN</button>
        </div>
    )
};

export default input; 