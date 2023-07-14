import { Work } from '../Work/Work'
import { timeLineData } from '../../data/time-line-data'
import './TimeLine.scss'

function TimeLine() {
    return(
        <div className='Time-line'>
            {timeLineData.map(jobData => (
                <div key={jobData.id}
                    className='Work-wrap'
                >
                    <Work jobObj={jobData} />
                </div>
            ))}
        </div>
    )
}

export {TimeLine}