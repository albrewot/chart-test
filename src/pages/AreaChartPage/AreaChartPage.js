import React from 'react'
import AreaChart from '../../components/AreaChart/AreaChart'
import Header from '../../components/Header/Header'
import classes from "./AreaChartPage.module.css"
import data from "../../const/data.json"

function AreaChartPage() {
    return (
        <div className={classes.AreaChartPage}>
            <Header title="Area Chart"/>
            <div className={classes.AreaChart_Container}>
                <AreaChart data={data}/>
            </div>
        </div>
    )
}

export default AreaChartPage