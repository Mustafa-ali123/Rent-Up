import HomeIcon from '@mui/icons-material/Home';
import DeckIcon from '@mui/icons-material/Deck';
import GrassIcon from '@mui/icons-material/Grass';
import DomainIcon from '@mui/icons-material/Domain';
import ApartmentIcon from '@mui/icons-material/Apartment';
 const Deals =()=> {
  return (
    <div className='container mb-5 '>
    <div className='row mx-auto'>
      <div className='text-center header mt-5 py-4 '>
        <h1>Featured Property Types</h1>
        <h5>Find all type of property</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 box my-3  mx-auto  '>
        <HomeIcon className='img' color="success" />
        <h4 className='text-center mt-1'>Family House</h4>
        <h6 className='text-center'>122 Property</h6>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 box my-3  mx-auto '>
        <ApartmentIcon className='img' color="success" />
        <h4 className='text-center mt-1'>Apartment</h4>
        <h6 className='text-center'>98 Property</h6>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 box my-3  mx-auto '>
        <GrassIcon className='img' color="success" />
        <h4 className='text-center mt-1'>Village Condo</h4>
        <h6 className='text-center'>22 Property</h6>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 box my-3  mx-auto '>
        <DomainIcon className='img' color="success" />
        <h4 className='text-center mt-1'>Business </h4>
        <h6 className='text-center'>29 Property</h6>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 my-3  mx-auto box'>
        <DeckIcon className='img' color="success" />
        <h4 className='text-center mt-1'>Family Hotel</h4>
        <h6 className='text-center'>52 Property</h6>
      </div>
    </div>
  </div>
  )
}
export default Deals