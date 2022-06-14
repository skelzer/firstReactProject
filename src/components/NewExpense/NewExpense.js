import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [formEditing, setFormEditing] = useState(false)
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseData(expenseData)
    }

    function editButtonHandler() {
        setFormEditing(true)
    }

    function stopEditHandler() {
        setFormEditing(false)
    }


    return <div className={"new-expense"}>{formEditing ?
        <ExpenseForm onStopEdit={stopEditHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>:
        <button type={"button"} onClick={editButtonHandler}>Add a new expense</button>}
    </div>
}

export default NewExpense;