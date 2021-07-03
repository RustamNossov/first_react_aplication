import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PorstStatusFilter from '../post-status-filtert/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import generator from '../../services/randomIdGenerator';


import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filtert/post-status-filter.css';
import '../search-panel/search-panel.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`



export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React?", important: false, like: false, id: generator(), display: true},
                {label: "That is soo good", important: true, like: false, id: generator(), display: true},
                {label: "I nead a break", important: false, like: false, id: generator(), display: true},
                3
                ],
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onFilter = this.onFilter.bind(this);
        // this.showAllRecords = this.showAllRecords.bind(this);
        // this.onAllLiked = this.onAllLiked.bind(this);
        //this.onToggleLicked = this.onToggleLicked.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.newId = generator();
        this.newArr = [];
        
    }
 
    deleteItem(id) {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index),
            //       after = data.slice(index+1);
            const newData = [...data.slice(0, index), ...data.slice(index+1)];
            return{
                data: newData
            }
        })
    }

    

   addItem(body) {

    this.newId = generator()

     const newItem = {
        label: body, 
        important: false, 
        like: false,
        id: this.newId,//this.maxId++,
        display: true
     }
     this.setState(({data}) => {
       
            this.newArr = [...data, newItem];
            return{
                data: this.newArr
            }
        
          
     })
   }

   onToggle(id, element) {
       this.setState(({data}) => {
           const index = data.findIndex(elem => elem.id===id);

           const oldItem = data[index];
           const newItem = {...oldItem, [element]: !oldItem[element]};

           const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
           return {
               data: newArr
           }
       })
   }

   onFilter(text) {
    
        text = text.trim().toLowerCase();
        

        if (text != '') {
            
            this.setState(({data})=> {
                let newData = data.filter(item => typeof item === 'object')
                newData = newData.map(item => {
                    if (item.label.toLowerCase().includes(text)) {
                        item.display = true
                    } else {
                        item.display = false
                    }
                    return item
                })

                return {
                    data: newData
                }            
            })
        } else {
            this.showAllRecords()
        }
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items 
        }
    }
    showAllRecords() {

        this.setState(({data})=> {
            let newData = data.filter(item => typeof item === 'object')

            newData = newData.map(item => {
                    item.display = true
            
                    return item
            })

            return {
                data: newData
            }  
        })  
    }

    // onAllLiked() {
    //     this.setState(({data})=> {
    //         let newData = data.filter(item => typeof item === 'object')
    //         newData = newData.map(item => {
    //             if (item.like === true) {
    //                 item.display = true
    //             } else {
    //                 item.display = false
    //             }
    //             return item
    //         })

    //         return {
    //             data: newData
    //         }            
    //     })


    // }

    onFilterSelect(filter) {
        this.setState({filter}) //        this.setState({filter : filter})

    }
    
    render() {
        
        const {data, filter} = this.state;
    
        const liked = data.filter(item => item.like===true && typeof item === 'object').length;
        const allPosts = data.filter(item => typeof item === 'object').length;

        const visiblePosts = this.filterPost(this.state.data, filter);
        
   
        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className = "search-panel d-flex">
                    <SearchPanel
                        onFilter={this.onFilter}
                        />
                    <PorstStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDeletePr={this.deleteItem} 
                    onToggle={this.onToggle}
                    
                    />
                <PostAddForm 
                    onAdd={this.addItem}/>
            
                
            </AppBlock>
        )
    }
}

