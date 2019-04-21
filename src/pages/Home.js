import React, { useEffect } from 'react'
import * as $ from 'jquery'
import background from '../assets/background-blured.jpg'

const Home = () => {

    useEffect(_ => {
        let height = $(document).height() - $('.navbar').height();
        $('.home').height(height - 16)
        window.document.title = 'Car Safe - Home'
    }, [])

    return (
        <article className="home">
            <img className="background-img" src={background} alt="white car" />
            <section className="home-text">
                <h2>be a good person</h2>
                <h2>and</h2>
                <h2>help others to retrieve their lost cars</h2>
            </section>
        </article>
    )
}

export default Home
