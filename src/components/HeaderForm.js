import React from 'react'
import '../App.css'

export default () => {
    return (
        <div className="container row">
            <div className="col s12 l6">
                <h1>Aqui va un titulo Nice</h1>
                <p>Aqui va el subtitulo</p>
            </div>
            <div className="col s12 l6">
                <form method="POST" action={require('../contacto.php')} className="__formbackground">
                    <div class="input-field">
                        <i class="material-icons icon_prefix"></i>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" required />
                    </div>

                    <div class="input-field">
                        <i class="material-icons"></i>
                        <label for="apellido">Apellido</label>
                        <input type="text" name="apellido" required />
                    </div>

                    <div class="input-field">
                        <i class="material-icons"></i>
                        <label for="email">Email</label>
                        <input type="email" name="email" required />
                    </div>

                    <div class="row">
                        <div class="input-field">
                            <i class="material-icons"></i>
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">First Name</label>
                        </div>
                    </div>

                    <p class="center-align">
                        <button class="waves-effect waves-light btn" type="submit"><i class="material-icons right">send</i>enviar</button>
                    </p>
                </form>

                <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s2">
                                <img src={require("../img/logo.png")} alt="" class="circle responsive-img" />
                            </div>
                            <div class="col s10">
                                <span class="black-text">
                                    Desarrollador Huitzitzili Domingo.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}