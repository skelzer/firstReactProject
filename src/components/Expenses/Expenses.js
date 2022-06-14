import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [currentYear, setCurrentYear] = useState("2022")
    const filteredExpenses = props.expenses.filter(element => element.date.getFullYear().toString() === currentYear)

    function changeFilterHandler(props) {
        setCurrentYear(props)
    }

    return <Card className={"expenses"}><ExpenseFilter onChangeFilter={changeFilterHandler}></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList filteredExpenses={filteredExpenses}/></Card>
}

export default Expenses;