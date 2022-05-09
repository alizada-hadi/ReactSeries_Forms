import React, {useState, Fragment} from 'react'
import memesData from '../../memesData'
export default function MemeGenerator() {
    const [image, setImage] = useState("https://picsum.photos/200/300")
    const showImageURL = () => {
        const dataArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * dataArray.length)
        
        setImage(dataArray[randomIndex].url)
    }
    const handleSubmit = e =>{
        e.preventDefault()
    }
    
  return (
    <Fragment>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
        <div className="col-lg-8 m-auto">
            <form action="" className='mt-5' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="">Top Text</label>
                        <input type="text" className='form-control form-control-lg' placeholder='Top Text' name='' />
                    </div>
                    <div className="col-lg-6">

                    <label htmlFor="">Bottom Text</label>
                        <input type="text" className='form-control form-control-lg' placeholder='Bottom Text' name='' />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button 
                    className="btn btn-primary btn-lg mt-3" 
                    type="button"
                    onClick={showImageURL}
                    >Get a new meme image </button>
                </div>
                <div className="image mt-3">
                    <img
                    style={{width : "100%", height : "500px"}} 
                    src={image} alt="" />
                </div>
            </form>
        </div>
    </Fragment>
  )
}
