import React from 'react'
import { ButtonContainer } from './styles'
import { Ibutton } from '../../components/Button/types'	
 const Button = ({title, variant="primary", onClick}: Ibutton ) =>  {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button }
