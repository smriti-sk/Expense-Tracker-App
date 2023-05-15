import './App.css';
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import IncomeExpence from "./Components/IncomeExpence"
import TransactionList from "./Components/TransactionList"
import AddTransaction from "./Components/AddTransaction"

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;