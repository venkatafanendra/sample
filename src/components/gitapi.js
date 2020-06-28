import React, { Component } from 'react';
import { List, Typography, Divider } from 'antd';
import 'antd/dist/antd.css';
//import { count } from 'console';
class Gitapi extends Component {
    constructor() {
        super();
        this.state={
            names : [],
            count : 0,
        }
    }
    
    componentWillMount() {
        fetch("https://api.github.com/users/leelakrishnak/repos").
        then(results => {
            return results.json();
        }).then(data => {
            let names = data.map( n => {
                return (
                    <div>
                        {n.name}
                    </div>
                )
            })
            this.setState({names : names});
            console.log("state",this.state.names);
        })
    }
    render() { 
        return ( 
            <div style={{marginLeft : 50, marginRight : 50}}>
                <Divider orientation="left">Github Repositories</Divider>
                <List
                    style={{color: "red"}}
                    bordered = {{color : "red"}}
                    dataSource={this.state.names}
                    renderItem = { name => (
                   <List.Item>
                    
                    <Typography.Text mark >
                        
                        Repo {this.state.count++} 
                    </Typography.Text> {name}
                   </List.Item>
                 )}
                />
            </div>
         );
    }
}
 
export default Gitapi;