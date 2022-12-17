import './gallery.css'
import {useState} from "react"
export default function Gallery () {
    let data = [
        {
            id:"1",
            imgSrc:"https://images.unsplash.com/photo-1671026423293-7adf6a6abd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id:"2",
            imgSrc:"https://images.unsplash.com/photo-1671127086689-4b34532aee8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id:"3",
            imgSrc:"https://images.unsplash.com/photo-1671253412347-f5c9437d067e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id:"4",
            imgSrc:"https://images.unsplash.com/photo-1671058832665-78637ba2b3c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
            id:"5",
            imgSrc:"https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        },
        {
            id:"6",
            imgSrc:"https://images.unsplash.com/photo-1670819917685-f1040e76b9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        }
        
        
    ]

    const [model,setModel] = useState(false)
    const [tempimgSrc,setTempimgSrc] = useState('')
    
    const getImg = (imgSrc) => {
        setModel(true)
        setTempimgSrc(imgSrc)

    }
    return (
        <>

            <div className = {model ? "model open":"model"}>
                <img src={tempimgSrc} alt={"This is Iamge"}/>
            </div>


        <div className="gallery">
            {
                data.map((item,index)=>{
                        return (
                            <div className="pics" key={index}  onClick={()=> getImg(item.imgSrc)} >
                                  <img style={{width:"100%"}} src={item.imgSrc}/>  
                            </div>
                        )
                })
            }
        </div>
        </>
    )
}