import React from 'react'
import Header from '../../components/Header/Header'
import SquareButtonLink from '../../components/SquareButtonLink/SquareButtonLink'
import classes from "./LandingPage.module.css"

function LandingPage() {
    return (
        <div className={classes.LandingPage}>
            <Header title="Charts"/>
            <div className={classes.Landing__Link_Container}>
                <SquareButtonLink link="/piechart" label="Pie Chart"/>
                <SquareButtonLink link="/barchart" label="Bar Chart"/>
                <SquareButtonLink link="/areachart" label="Area Chart"/>
                <SquareButtonLink link="/linechart" label="Line Chart"/>
            </div>
        </div>
    )
}

export default LandingPage
