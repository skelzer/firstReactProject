import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";


function ExpenseList(prop) {
    let allExpenseItems = []
    console.log(prop.expenses)
    prop.expenses.forEach(function (element, idx) {
        allExpenseItems.push(<ExpenseItem className={"expenses"} key={"expense" + idx} description={element.description}
                                          amount={element.amount}
                                          date={element.date}></ExpenseItem>)
    })
    return <Card className={"expenses"}>{allExpenseItems}</Card>
}

export default ExpenseList;