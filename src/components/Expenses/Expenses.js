import ExpenseIteam from './ExpenseIteam';
import './Expenses.css';
import Card from '../UI/Card';
const Expenses=(props)=>{
    

return( 
  <Card className='expenses'>
    <ExpenseIteam
        title={props.iteams[0].title}
        amount={props.iteams[0].amount}
        date={props.iteams[0].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={props.iteams[1].title}
        amount={props.iteams[1].amount}
        date={props.iteams[1].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={props.iteams[2].title}
        amount={props.iteams[2].amount}
        date={props.iteams[2].date}
      ></ExpenseIteam>
      <ExpenseIteam
        title={props.iteams[3].title}
        amount={props.iteams[3].amount}
        date={props.iteams[3].date}
      ></ExpenseIteam>
  </Card>


  );



}

export default Expenses;