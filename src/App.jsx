import View from './Views/View'
import Child from './Views/Child'
import { useBookContext } from './Hook/useBookContext'
import './App.css'

function App() {
    const booksData = useBookContext();

  return (
    <>
      
      
      <h1>Best Sellers in 2020</h1>
        <div className='app-div'>
          <div className='books-top'>
          <View book={booksData[0]}/>
          <View book={booksData[1]}/>
          </div>
          <Child/>
          </div>
    </>
  )
}
export default App;
