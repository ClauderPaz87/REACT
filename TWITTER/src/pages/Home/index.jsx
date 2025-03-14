import './style.css'

import SideBar from '../../components/SideBar.jsx'
import Tweets from '../../components/FormsTwitter/FormsTweets.jsx'
import ExtraTwitter from '../../components/InformationTwitter/ExtraTwitter.jsx'
import RandomUsers from '../../components/FormsTwitter/RandomUsers.jsx'

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
