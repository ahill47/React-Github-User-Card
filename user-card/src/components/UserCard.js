import React from 'react';

export default function UserCard(props){
    return(
        <div key={props.id} className='userClass'>
            
            <h2> UserName: {props.login}</h2>
        
            
            <p><a href={props.html_url}> GitHub Page</a></p>
            
            <img  src={props.avatar_url}/>
        </div>
    )
}