import React from 'react'
import Header from '../components/Header'

//main component that will hold multiple components and states
import MainContainer from '../components/MainContainer'

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <MainContainer />
        </React.Fragment>
    )
}

export default Home