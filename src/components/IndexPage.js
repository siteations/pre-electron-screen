import React, { Component } from 'react';
import {indexMenu, indexSubpages} from '../copy/menu';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changePage=this.changePage.bind(this);
  }

  changePage(e){
    let link = e.target.attributes.value.value;
    console.log(link);
    this.props.info.history.push(link);
  }


  render() {

  return (
        <div className=" row indexGen">
          <div className="col-xs-10 col-xs-offset-1">
          {indexMenu &&
            indexMenu.map(item=>{
              if (item.id>0){
                return (
                  <div className="row marg40 indexItem" value={item.src} onTouchTap={e=>this.changePage(e)}>
                    <div className="col-xs-4">
                      <img src={item.image} style={{width:'100%', borderRadius: '5px'}} value={item.src} />
                    </div>
                    <div className="col-xs-8" value={item.src} >
                    <h3 className="titleAlt uppercase" value={item.src} >{item.title}</h3>
                    <div className="col-xs-8" value={item.src} >
                      <p value={item.src} >{item.text}</p>
                    </div>
                    </div>
                  </div>
                )
              }
            })

          }
          <div style={{height:'100px'}}>
          </div>
          </div>
          </div>

          )

}

}

export default IndexPage;
