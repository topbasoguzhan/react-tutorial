import React from 'react'

function MemoHookSample() {


    const getDate = () => {

    }

    useMemo(() => getDate, [])

    var date = getDate();

    return (
        <div>
            {date}
        </div>
    )
}

export default MemoHookSample
