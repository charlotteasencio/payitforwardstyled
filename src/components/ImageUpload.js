import React, { Component} from 'react';
import * as firebase from 'firebase'

class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            photoURL: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this)
    }
    handleChange = e => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        if(this.state.image !== null) {
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed',
         (snapshot) => {
             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100)
             this.setState({progress})
             //progress function
                
        }, (error) => {
             console.log(error)
         }, 
         () => {
             firebase.storage().ref('images').child(image.name).getDownloadURL().then(photoURL => {
                 console.log("photo", photoURL)
                 this.setState({photoURL})
                 firebase.auth().currentUser.updateProfile({ photoURL: photoURL })
                 window.location.reload();
             })
             
            //complete function

        });
    } else {
        alert("Please choose an image first")
    }
        
    }
    render(){
        return(
            <div>
                <progress value={this.state.progress} max='100'/>
                <input id='test' type="file" onChange={this.handleChange}/>
                <button className="basicButtonPink" onClick={this.handleUpload}>Upload Photo</button>
                {/* <img src={this.state.photoURL || 'https://via.placeholder.com/200x200'} alt="Uploaded images" height="200" width="200" /> */}
            </div>
        )
    }
}

export default ImageUpload;