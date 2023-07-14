import { Image } from '../Image/Image';
import { Line } from '../Line/Line';
import { DescripcionList } from '../DescriptionList/DescriptionList';

import './Work.scss';

function Work({jobObj}) {
    return(
        <div className="Work">
            <h3 className="Work__Title">
                {jobObj.headLine}
            </h3>
            <p className="Work__Date">
                {jobObj.time.since} - {jobObj.time.to}</p>
            <div className='Work__Details'>
                <div className='Work__Logo'>
                    <Image 
                        companyLogo={jobObj.company.logoImg}
                        companyName={jobObj.company.name} 
                        companySite={jobObj.company.siteUrl}
                    />
                </div>
                <div className='Work__Line'>
                    <Line />
                </div>
                <div className='Work__Description'>
                    <DescripcionList list={jobObj.jobTasks} />
                </div>
            </div>
        </div>
    )
}

export {Work}