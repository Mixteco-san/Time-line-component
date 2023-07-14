import './Line.scss'

export const Line = () => (
    <div className='Line'>
        <div className='Line__head'>
            <div className='Figure Figure--circle'></div>
        </div>
        <div className='Line__body'>
            <div className='Figure Figure--rect'></div>
        </div>
        <div className='Line__footer'>
            <div className='Figure Figure--circle'></div>
        </div>
    </div>
)