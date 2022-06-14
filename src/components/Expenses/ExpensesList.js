import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";


function ExpensesList(props) {
    let expenseContent = <p className={"expenses-list__fallback"}>No expenses for this period</p>
    if (props.filteredExpenses.length > 0) {
        expenseContent = props.filteredExpenses.map((expense) => {
            return (
                <ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount}
                             date={expense.date}/>)
        })
    }
    return <ul className={"expenses-list"}>{expenseContent}</ul>
}


export default ExpensesList