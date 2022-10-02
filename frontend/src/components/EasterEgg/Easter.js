import React from 'react'
import "./Easter.css"
import { useState } from 'react'

function Easter() {
    const [egg, setEgg] = useState("");

    const easter_egg = () => {
        if (egg === "cook-off") {
            alert("Go to cookoff.codechefvit.com");
        }
    }

    return (
        <div class="container">
            <form onSubmit={
                easter_egg
            }>

                <input type="text" placeholder="What're you trying to find here? Don't be an inspector"
                    value={egg} onChange={(e) => setEgg(e.target.value)} />

                <button id="button_1" type="submit">
                    I'm not an inspector
                </button>

            </form>


        </div>
    )
}

export default Easter