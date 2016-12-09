// Main app
import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.showTab = this.showTab.bind(this);
    }

    componentDidMount(){
        this.showTab();
    }

    componentDidUpdate(){
      this.showTab();
    }

    showTab(){
       let path = window.location.pathname.substr(1);
       let target = path == '' ? '#records_tab' : '#'+path+'_tab';
       $('.active').attr('class','');
       $(target).attr('class','active');
    }

    render() {
        return (
            <div className='app_div'>
                <h1>
                    Interview Desktop
                </h1>
                <ul className="nav nav-tabs">
                    <li id='records_tab' className="active">
                        <Link to="/">Records</Link>
                    </li>
                    <li id='actor_tab'>
                        <Link to="/actor">Actor</Link>
                    </li>
                    <li>
                        <Link data-toggle="tab" to="#menu2" data-target='#'>Top Repo</Link>
                    </li>
                    <li>
                        <Link data-toggle="tab" to="#menu3" data-target='#'>Repos</Link>
                    </li>
                    <li>
                        <Link data-toggle="tab" to="#menu3" data-target='#'>Delete History</Link>
                    </li>
                </ul>
                <div className='app_children_div'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}