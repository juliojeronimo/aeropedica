import { useState } from 'react'
import { ContainerModal, Box, Description, ContainerActions } from './deleteModal.style'
import { Button } from '../button'


const DeleteModal = ({ text, deleteAction, show, onClose }) => {
    // const [active, setActive] = useState(show)

    return <ContainerModal show={show}>
        <Box>
            <Description>
                {`Ao excluir ${text} não será possível recuperar os dados. Tem certeza que deseja excluir?`}
            </Description>
            <ContainerActions>
                <Button label={'Excluir'} size={'large'} variant={'secondary'} onClick={() => deleteAction()} />
                <Button label={'Sair'} size={'large'} variant={'ghost'} onClick={() => onClose()} />
            </ContainerActions>

        </Box>
    </ContainerModal>
}

DeleteModal.props = {
    show: true
}

export { DeleteModal }