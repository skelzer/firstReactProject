import "./ExpenseForm.css"
import ExpenseItem from "../Expenses/ExpenseItem";
import {useState} from "react";


function ExpenseForm(props) {

    const [userInput, setUserInput] = useState({title: "New Expense", date: new Date(), amount: 0})

    function titleHandler(event) {
        setUserInput(prevState => ({...prevState, title: event.target.value}))
    }

    function amountHandler(event) {
        setUserInput(prevState => ({...prevState, amount: parseFloat(event.target.value)}))
    }

    function dateHandler(event) {
        const newDate = event.target.value
        if (Date.parse(newDate)) {
            setUserInput(prevState => ({...prevState, date: new Date(event.target.value)}))
        }
    }

    function submittedFormHandler(event) {
        event.preventDefault()
        props.onStopEdit()
        props.onSaveExpenseData(userInput)
        setUserInput({title: "New Expense", date: new Date(), amount: 0})
    }

    function cancelButtonHandler() {
        setUserInput({title: "New Expense", date: new Date(), amount: 0})
        props.onStopEdit()
    }


    return <form onSubmit={submittedFormHandler}>
        <div className={"new-expense__controls"}>
            <div className={"new-expense__controls"}>
                <label>Title</label>
                <input type="text" onChange={titleHandler} value={userInput.title}/>
            </div>
            <div className={"new-expense__controls"}>
                <label>Amount</label>
                <input type="number" min={0.01} step={0.01} onChange={amountHandler} value={userInput.amount}/>
            </div>
            <div className={"new-expense__controls"}>
                <label>Date</label>
                <input type="date" min={"2019-01-01"} max={"2022-12-31"} onChange={dateHandler}
                       value={userInput.date.toISOString().slice(0, 10)}/>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"button"} onClick={cancelButtonHandler}>Cancel</button>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Submit</button>
            </div>
        </div>
        <div>
            <ExpenseItem className={"expenses"} title={userInput.title}
                         amount={userInput.amount}
                         date={userInput.date}></ExpenseItem>
        </div>
    </form>
}


export default ExpenseForm;