import React from 'react'
import Header from '../../components/Header/Header'
import classes from "./LineChartPage.module.css"
import LineChartC from '../../components/LineChartC/LineChartC'
import data from "../../const/data.json"

function LineChartPage() {
    return (
        <div className={classes.LineChartPage}>
            <Header title="Line Chart"/>
            <div className={classes.LineChart_Container}>
                <LineChartC data={data}/>
            </div>
        </div>
    )
}

export default LineChartPage