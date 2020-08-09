import React,{Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let imageLink = event.target.elements.link.value;
        imageLink = "Photos/".concat(imageLink)
        console.log(imageLink)
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
            this.props.onAddPhoto(post)
        }
    }

    render(){
        return(
            <div>
                <h1>AddPhoto</h1>
                <div className="form"> 
                    <form onSubmit={this.handleSubmit}> 
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;