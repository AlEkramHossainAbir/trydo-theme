import React from 'react'

import partner1 from './../../../Assets/Images/partner-1.png'
import partner2 from './../../../Assets/Images/partner-2.png'
import partner3 from './../../../Assets/Images/partner-3.png'
import partner4 from './../../../Assets/Images/partner-4.png'
import partner5 from './../../../Assets/Images/partner-5.png'
import partner6 from './../../../Assets/Images/partner-6.png'
import partner7 from './../../../Assets/Images/partner-7.png'
import partner8 from './../../../Assets/Images/partner-8.png'
import partner9 from './../../../Assets/Images/partner-9.png'

const PartnerImages = () => {
    return (
        <div className='partner-images'>
            <div className='container'>
                <div className='partners-list container'>
                    <img src={partner1} alt='partner' className='img-fluid' />
                    <img src={partner2} alt='partner' className='img-fluid' />
                    <img src={partner3} alt='partner' className='img-fluid' />
                    <img src={partner4} alt='partner' className='img-fluid' />
                    <img src={partner5} alt='partner' className='img-fluid' />


                </div>
                <div className='container'>
                    <div className='container'>
                        <div className='container second-partners-list'>
                            <img src={partner6} alt='partner' className='img-fluid' />
                            <img src={partner7} alt='partner' className='img-fluid' />
                            <img src={partner8} alt='partner' className='img-fluid' />
                            <img src={partner9} alt='partner' className='img-fluid' />

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default PartnerImages