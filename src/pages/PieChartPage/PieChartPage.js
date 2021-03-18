import React from 'react'
import Header from '../../components/Header/Header'
import classes from "./PieChartPage.module.css"
import PChart from '../../components/PieChart/PieChart'
import data from "../../const/pie.json"

function PieChartPage() {
    return (
        <div className={classes.PieChartPage}>
            <Header title="Pie Chart"/>
            <div className={classes.PieChart_Container}>
                <PChart data={data}/>
            </div>
        </div>
    )
}

export default PieChartPage