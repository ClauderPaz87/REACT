import './style.css'

import SideBar from '../../components/SideBar'
import Tweets from '../../components/FormsTwitter/FormsTweets'
import ExtraTwitter from '../../components/ExtraTwitter'

function App() {
 
  return (
    <div className='grid grid-cols-3'>
      <SideBar/>
      <Tweets/>
      <ExtraTwitter/>
    </div>
      
  )
}

export default App
