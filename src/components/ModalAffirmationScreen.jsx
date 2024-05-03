import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LoadingSpinner from './ui/LoadingSpinner'
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

function ModalAffirmationScreen({error, success, isLoading}) {

  return (
    <div className='w-max h-max'>
      {isLoading ? <LoadingSpinner /> : error ? <p><FontAwesomeIcon className='text-red-500' size='2xl' icon={faXmarkCircle} />{error}</p> : success ? <p><FontAwesomeIcon className='text-green-500' size='2xl' icon={faCheckCircle} />{success}</p> : null}
    </div>
  )
}

export default ModalAffirmationScreen