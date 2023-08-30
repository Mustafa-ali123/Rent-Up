import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function Awards() {
  return (
    <header className=' py-5  '>
    <div className='container '>
      <div className='row mx-auto'>
        <div className='text-center header  py-3 '>
          <h6 className='mb-3'>Our Awards</h6>
          <h2 className='mb-3'>Over 1,24,00 + Happy User Being With Us Still</h2>
          <h2 className='mb-5'> They Love Oue Services</h2>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 mx-auto text-center '>
          <span><HomeIcon className='icon' color='primary' /></span>
          <h3 className='mt-3'>32 M</h3>
          <p>Blue Burmin Award</p>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 mx-auto text-center '>
          <span><EmojiEventsIcon className='icon' color='primary' /></span>
          <h3 className='mt-3'>42 M</h3>
          <p>Blue Burmin Award</p>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 mx-auto text-center '>
          <span><FavoriteIcon className='icon' color='primary' /></span>
          <h3 className='mt-3'>29 M</h3>
          <p>Blue Burmin Award</p>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 mx-auto text-center '>
          <span><LightbulbIcon className='icon' color='primary' /></span>
          <h3 className='mt-3'>54 M</h3>
          <p>Blue Burmin Award</p>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 mx-auto text-center '>
          <span><BusinessCenterIcon className='icon' color='primary' /></span>
          <h3 className='mt-3'>65 M</h3>
          <p>Blue Burmin Award</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Awards