import Image from '../Image'
import RootLayout from '../layouts/RootLayout'
import Banner from '../../assets/Group 10.png'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
<>
<RootLayout/> 
<Outlet>
<Image src={Banner}/>
</Outlet>

</>
  )
}

export default Home