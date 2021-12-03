import logo from './logo.svg';
import './App.css';
import Card from './Card';

let data = [
  {title: "Some fancy product", description: "Soo good asd", price: 70, review: "Good", reviewer: "John", discount: false, recommended: true},
  {title: "Not so fancy product", description: "Not so good", price: 7, review: "Not good",reviewer: "George", discount: false, recommended: true},
  {title: "A product", description: "It exists", price: 17, review: "Nice", reviewer: "Anna", discount: true, recommended: false},
  {title: "Another fancy product", description: "Also good", price: 80, review: "Fancy", reviewer: "Zac", discount: false, recommended: false},
  {title: "Who knows what", description: "You need it", price: 27, review: "Crappy", reviewer: "Rick", discount: true, recommended: false}
]

function App() {
  return (
    <div className="App">
      <h1>Webshop</h1>
      <div className={"cardholder"}>
        {data.map(card => 
      <Card card={card}/>
        )}
      </div>
    </div>
  );
}

export default App;
