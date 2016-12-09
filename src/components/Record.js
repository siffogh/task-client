/*

    repo_id
    repo_name
    type of event
    actor.login
    actor.avatar_url

*/

import React from 'react'

export default class Record extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul className='list-group'>
                <li className='list-group-item'>{this.props.repo.id}</li>
                <li className='list-group-item'>{this.props.repo.name}</li>
                <li className='list-group-item'>{this.props.type}</li>
                <li className='list-group-item' style={{textAlign: 'center'}}>
                 <figure class='figure'>
                    <figcaption class="figure-caption">
                        <h4>{this.props.actor.login}</h4>
                    </figcaption>
                    <img src={this.props.actor.avatar_url} class='thumbnail'/>
                 </figure>
                 
                </li>
            </ul>
        );

    }
}