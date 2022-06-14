import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";


function ExpenseList(props) {
    let allExpenseItems = []
    const [currentYear, setCurrentYear] = useState("2022")

    function changeFilterHandler(props) {
        setCurrentYear(props)
    }

    props.expenses.forEach(function (element, idx) {
        if (element.date.getFullYear().toString() === currentYear)
        {
            allExpenseItems.push(<ExpenseItem className={"expenses"} key={"expense" + idx} title={element.title}
                                              amount={element.amount}
                                              date={element.date}></ExpenseItem>)
        }
    })
    return <Card className={"expenses"}><ExpenseFilter onChangeFilter={changeFilterHandler}></ExpenseFilter>
        <Card className={"expenses"}>{allExpenseItems}</Card></Card>
}

export default ExpenseList;