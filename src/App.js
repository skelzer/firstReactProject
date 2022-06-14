import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";


const App = () => {


    const expenses = [
        {title: "Car insurance", amount: 294.15, date: new Date(2020, 5, 1)},
        {title: "Taxis", amount: 291.23, date: new Date(2020, 6, 3)},
        {title: "Pollo asado", amount: 50, date: new Date(2022, 9, 1)},
        {title: "Cevapcici", amount: 5.32, date: new Date(2022, 2, 1)}

    ]
    const [state, setState] = useState(expenses)

    function saveExpenseDataHandler (enteredExpenseData){
        setState(function(prevState) {setState([...prevState, enteredExpenseData])})
    }
    return <div>
        <ExpenseList expenses={state}/>
        <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
    </div>;
}

export default App;