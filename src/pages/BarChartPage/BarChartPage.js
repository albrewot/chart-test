import React from 'react'
import BarChart from '../../components/BarChart/BarChart'
import Header from '../../components/Header/Header'
import classes from "./BarChartPage.module.css"
import data from "../../const/data.json"

function BarChartPage() {
    return (
        <div className={classes.BarChartPage}>
            <Header title="Bar Chart"/>
            <div className={classes.BarChart_Container}>
                <BarChart data={data}/>
            </div>
        </div>
    )
}

export default BarChartPage