import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

export default () => {

    useEffect(() => {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    }, [])


    return (
        <div className="container">
            <div className="parallax-container">
                <div className="parallax">
                    <img src="https://picsum.photos/1200/300" alt="parallax_1" />
                </div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                        Parallax is an effect where the background content or image in this case,
                        is moved at a different speed than the foreground content while scrolling.
          </p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src="https://picsum.photos/1200/300" alt="parallax_1" />
                </div>
                <form>
                    <label>
                        Name:
          <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}


