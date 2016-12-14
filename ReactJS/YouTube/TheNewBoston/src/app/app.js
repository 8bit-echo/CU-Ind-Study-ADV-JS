
var Comment = React.createClass({

    getInitialState: function(){
        return {editing: false};
    },

    edit: function(){
        this.setState({editing: true});
    },

    remove: function(){
         this.props.deleteFromBoard(this.props.index);
    },

    save: function(){
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
         this.setState({editing:false});

    },

    renderForm: function(){
        return (
           <div className="commentContainer">
               <textarea defaultValue={this.props.children} ref="newText"></textarea>
               <button className="button-success" onClick={this.save}>Save</button>
           </div>
        );
    },

    renderNormal: function(){
         return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button className="button-primary" onClick={this.edit}>Edit</button>
                <button className="button-danger" onClick={this.remove}>Remove</button>
            </div>
        );
    },

    render: function(){
         if (this.state.editing) {
             return this.renderForm();
         } else {
             return this.renderNormal() ;
         }
    }
});

var Board = React.createClass({
    getInitialState: function(){
        return {
            comments: []
        };
    },

    add: function(text){
         var array = this.state.comments;
         array.push(text);
         this.setState({comments:array});
    },

    removeComment: function(i){
            console.log('removing comment: '+ i);
            var array = this.state.comments;
            array.splice(i, 1);
            this.setState({comments: array});
    },

    updateComment: function(newText, i){
         console.log( 'updating Comment');
         var array = this.state.comments;
         array[i] = newText;
         this.setState({comments: array});
    },

    eachComment: function(text, i) {
        return (
            <Comment key={i} index={i} updateCommentText = {this.updateComment} deleteFromBoard = {this.removeComment}>
                {text}
            </Comment>);
    },

    render: function(){
         return (
             <div>
                 <button className="button-info" onClick={this.add.bind(null, 'Add a new Note')}> Add New </button>
                 <div className = "board">
                     {this.state.comments.map(this.eachComment)}
                 </div>
             </div>
         );
    }
});

ReactDOM.render(
    <Board />,
    document.getElementById('container')
);



// ============= //
//     STATES    //
// ============= //
// For use when something needs to change during its lifecycle

// var Checkbox = React.createClass({
//
//     getInitialState: function(){
//         return {checked: false};
//     },
//
//     handleChecked: function(){
//         this.setState({checked: !this.state.checked});
//     },
//
//     render: function(){
//         var msg;
//         if (this.state.checked) {
//             msg = 'checked';
//         } else {
//             msg = 'unchecked';
//         }
//         return(
//          <div>
//             <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleChecked}/>
//             <h3>Checkbox is {msg}</h3>
//          </div>
//      )
//     }
// });
//
// ReactDOM.render(<Checkbox />, document.getElementById('check'));
