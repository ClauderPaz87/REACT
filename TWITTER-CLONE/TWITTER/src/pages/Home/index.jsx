import './style.css'

import SideBar from '../../components/SideBar'
import Tweets from '../../components/Tweets'

function App() {
 
  return (
    <div className='grid grid-cols-3'>
      <SideBar/>
      <Tweets/>
    </div>
      
  )
}

export default App
