import "./ExpenseForm.css"
import ExpenseItem from "../Expenses/ExpenseItem";
import {useState} from "react";


function ExpenseForm() {


    const [desc, setDesc] = useState("New Expense")
    const [date, setDate] = useState(new Date(2019, 0, 1))
    const [amount, setAmount] = useState(0)

    function titleHandler(event) {
        console.log(typeof (event.target.value))
        setDesc(event.target.value)
    }

    function amountHandler(event) {
        setAmount(event.target.value)
    }

    function dateHandler(event) {
        setDate(new Date(event.target.value))
    }

    return <form>
        <div className={"new-expense__controls"}>
            <div className={"new-expense__controls"}>
                <label>Title</label>
                <input type="text" onChange={titleHandler}/>
            </div>
            <div className={"new-expense__controls"}>
                <label>Amount</label>
                <input type="number" min={0.01} step={0.01} onChange={amountHandler}/>
            </div>
            <div className={"new-expense__controls"}>
                <label>Date</label>
                <input type="date" min={"2019-01-01"} max={"2022-12-31"} onChange={dateHandler}/>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"submit"}>Submit</button>
            </div>
        </div>
        <div>
            <ExpenseItem className={"expenses"} description={desc}
                         amount={amount}
                         date={date}></ExpenseItem>
        </div>
    </form>
}


export default ExpenseForm;