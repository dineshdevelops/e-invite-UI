import React from 'react'
import NotifyComponent from '../../components/util/NotifyComponent'

const Notify = () => {

  return (
    <div>
        <NotifyComponent notifyProps={{icon:"mailVerify", message:""}} />
    </div>
  )
}

export default Notify