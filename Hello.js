import React, { Component,Fragment } from 'react'
var fs = require('file-system');
var base64ToImage = require('base64-to-image');
export default class Home extends Component {
    constructor(){
        super();
        console.log("constructor");
        this.state = {
            email: "ejemplo@algo.com",
            password: "",
            session: false,
            imgb64: ''
        }
    }

    
    handleClickButon = () =>{
        if(this.state.password && this.state.email){
          !/\S+@\S+\.\S+/.test(this.state.email) ? alert("correo invalido") : 
        this.setState({
            session: !this.state.session
        })
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        async function Main() {
            const file = document.getElementById('img').files[0];
            const img = await toBase64(file);
            console.log(img);
            return img;
         }

         Main().then((img) => {
            this.setState({
                imgb64: img
            })
         })

      }else{
         this.state.email ? 
         alert("ingrese el password")
         :
         alert("ingrese el email ")
        }
      }
  
    
    handleChangeValues=(e)=>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Fragment>
                {
                    !this.state.session &&
                    <form autoComplete = "off">
                        <div>
                            <label>
                                Email
                            </label>
                            <input name="email" onChange={this.handleChangeValues} value={this.state.email} type="text"/>
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <input name="password" onChange={this.handleChangeValues} value={this.state.password} type="password"/>
                        </div>
                        <div>
                            <input type="file" name="img" id="img"/>
                        </div>
                        <button type="reset" onClick={this.handleClickButon}>
                            Aceptar
                        </button>
                    </form>
                }
                {
                    this.state.session &&
                    <div>
                        <h1> 
                            Bienvenido usuario {this.state.email} 
                        </h1>
                        <h1> 
                            B64 {n=this.state.imgb64} 
                        </h1>
                        {var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANS...';}
                        <Image style={{width: 50, height: 50}} source={{uri: base64Icon}}/>
                        <button onClick={this.handleClickButon}>
                            Cerrar Session
                        </button>
                    </div>   
                }
            </Fragment>
        )
    }
}
