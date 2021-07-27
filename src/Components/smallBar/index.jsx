import React from 'react'
import Shome from './smallHome/SmallHome'
import Sexplorer from './smallExplorer/SmallExplorer'
import Ssubscription from './smallSubscription/SmallLibrary'
import Slibrart from './smallLibrary/SsmallSubscriptions';

const index = ({prp,toggler}) => {

    return (
        <div className={toggler ? '':'plus'}>


             <div className='Height'>
            <Shome/>
            <Sexplorer />
            <Slibrart />
            <Ssubscription />
            </div>

            <div className='plus-grid'>
                {prp}
            </div>

        </div>
    )
}

export default index
