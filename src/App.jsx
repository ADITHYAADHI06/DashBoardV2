import './App.css'
import DashBoard from './components/DashBoard.jsx/DashBoard'
import NavigationBar from './components/NavigationBar'

function App() {

  return (
    <div className='flex'>
      {/* {navigation} */}
      <NavigationBar />
      {/* Main routing component */}
      <DashBoard />
    </div>
  )
}

export default App
