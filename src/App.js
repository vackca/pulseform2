import PulseForm from "./pulseformV2";
import React, {Component} from  'react';
import { BrowserRouter, Route} from "react-router-dom"
import Table from "./MyStatistics";
import NavigationButton from "./NavigationButtonV2";


class App extends Component{

    state={};

    RowRemover = (index) =>{
        const answer = window.confirm('Виктор Александрович, а вы точно хотите удалить эти данные?');

        if(answer) {
            const oldBase = JSON.parse(localStorage.getItem('baseOfValues'));
            const newBase = oldBase.filter((item, i) => i !== index);

            localStorage.setItem('baseOfValues', JSON.stringify(newBase));
            this.setState(this.state);
        }
    }

    defineLocalStorage =()=>{
      if(!localStorage['baseOfValues']) {
        Object.defineProperty(localStorage, 'baseOfValues', {
          value: JSON.stringify([]),
          writable: true,
          configurable: true,
          enumerable: true
        })
      }
    }


  render() {
    this.defineLocalStorage();


      return(
           <div id={'container'}>
               <NavigationButton />
               <switch>
                   <Route exact path='/'>
                       <PulseForm defineLocalStorage={this.defineLocalStorage} />
                   </Route>
                   <Route exact path='/statistics'>
                       <Table RowRemover={this.RowRemover}/>
                   </Route>
               </switch>
           </div>
      )
  }
}

//<Route exact path='/'> <FormCreator defineLocalStorage={this.defineLocalStorage} /> </Route>

export default App;
