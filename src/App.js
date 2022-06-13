import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
    const expenses = [
        {description: "Car insurance", amount: 294.15, date: new Date(2020, 5, 1)},
        {description: "Taxis", amount: 291.23, date: new Date(2020, 6, 3)},
        {description: "Pollo asado", amount: 50, date: new Date(2022, 9, 1)},
        {description: "Cevapcici", amount: 5.32, date: new Date(2022, 2, 1)}

    ]

    return <div>
        <ExpenseList expenses={expenses}/>
        <NewExpense></NewExpense>
    </div>;
}

export default App;
