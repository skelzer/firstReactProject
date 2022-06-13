import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    function saveExpenseDataHandler (enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData)
    }

    return <div className={"new-expense"}>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
}

export default NewExpense;