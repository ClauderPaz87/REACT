import './style.css'

import SideBar from '../../components/SideBar'
import Tweets from '../../components/FormsTwitter/FormsTweets'
import ExtraTwitter from '../../components/InformationTwitter/ExtraTwitter'
import RandomUsers from '../../components/FormsTwitter/RandomUsers'

function App() {
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <SideBar/>
      <Tweets className=""/>
      <ExtraTwitter/>
      <RandomUsers/>
    </div>
      
  )
}

export default App
