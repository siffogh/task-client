// Gets records filtered by repository id and event type Notice : We assume that
// both input data are needed to filter the records !
import React from 'react'
import Record from './Record'

export default class Records extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repo_id: '',
            event_type: '',
            records: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        $.ajax({
            url: 'http://localhost:3000/api/records',
            type: 'post',
            dataType: 'json',
            success: (data) => {
                this.setState({records: data.records});
            },
            data: this.state
        });
    }

    handleClick(event) {
        dataLayer.push({
          'user_name': 'seif',
          'user_age': '22',
          'event': 'page_loaded'
        });
    }

    render() {
        return (
            <div className='records_div'>
                <div className="input-group">
                    <span className="input-group-addon" id="repo_id_addon">repo_id</span>
                    <input name='repo_id' type="text" className="form-control" aria-describedby="repo_id_addon" onChange={this.handleChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon" id="event_type_addon">event_type</span>
                    <input name='event_type' type="text" className="form-control" aria-describedby="event_type_addon" onChange={this.handleChange}/>
                </div>
                <div className='btn_container'>
                    <button className='btn btn-primary' onClick={this.handleClick}>Search</button>
                </div>
                <div className='records_div_content'>
                    {this.state.records.map(record => <Record {...record}/>)}
                </div>
            </div>
        );
    }
}
