import React from 'react';
import './works.css';
import Portfolio1 from 

const works = ()=>{
    return(
        <section id='works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <span className='worksDesc'>i take pride</span>
            <div className='worksImgs'>
                <img src={Portfolio1} className='worksImg'/>
                <img src='' className='worksImg'/>
                <img src='' className='worksImg'/>
                <img src='' className='worksImg'/>
                <img src='' className='worksImg'/>
                <img src='' className='worksImg'/>
            </div>
        </section>
    )
}



export default Works;