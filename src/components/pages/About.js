import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>About page</h2>
            <h3>{ props.match.params.id }</h3>
            <h3>{ props.match.params.name }</h3>

            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Sit libero nobis quas saepe.
                 Explicabo, quisquam. At ducimus doloremque delectus labore.
            </p>
        </div>
    )
}
