import React from 'react'
import Shome from './smallHome/SmallHome'
import Sexplorer from './smallExplorer/SmallExplorer'
import Ssubscription from './smallSubscription/SmallLibrary'
import Slibrart from './smallLibrary/SsmallSubscriptions';

const index = () => {
    return (
        <div className='Height'>

            <Shome/>
            <Sexplorer />
            <Slibrart />
            <Ssubscription />


        </div>
    )
}

export default index
