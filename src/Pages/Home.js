import React from 'react'
import Intro1 from "../components/Intro1";
import Intro2 from "../components/Intro2";
import Card from '../components/Card'
import SignUp from '../components/SignUp';
// import Slide from '../components/Slide';
import Video from '../components/Video';
import Main from '../components/Main';

const Home = () => {
    return (
        <>
            <Main />
            {/* <Slide /> */}
            <Video />

            <Card />
            <Intro1 />
            <Intro2 />
            <SignUp />
        </>
    )
}

export default Home