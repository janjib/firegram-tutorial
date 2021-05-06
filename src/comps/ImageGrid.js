import React from 'react'
import UseFirestore from '../hooks/UseFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImage}) => {

    const {docs} = UseFirestore('images')
    console.log(docs)

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => {
                return (
                    <motion.div className="img-wrap" key={doc.id} onClick={()=> setSelectedImage(doc.url)} whileHover={{opacity:1}} layout>
                     <img src={doc.url} alt={doc.url} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}}/>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ImageGrid
