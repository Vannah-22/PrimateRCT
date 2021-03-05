import berry from './ColorSchemes/berry.png'; 
// start from the currrent directory, continue to the folder, grab the image //


function Gallery () {
    return(
        <div>
            <img src = {berry} className= "colorPics" alt = "BerryColors" />
        </div>
    )
}
export default Gallery;