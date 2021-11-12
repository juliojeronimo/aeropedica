import { Container, HeaderRow, ColumnTitle, ColumnItem, ItemRow } from './table.style';
import { Button } from '../button'


const Table = ({ header, list, updateItem, deleteItem }) => {

    let keys = Object.keys(list[0])

    return (
        <Container>
            <HeaderRow>
                {header.map((item) => {
                    return <ColumnTitle>{item}</ColumnTitle>
                })}
            </HeaderRow>

            {list.map((itemObj, index) => {
                return (<ItemRow index={index}>
                    {
                        keys.map((item) => {
                            return <ColumnItem>{itemObj[item]}</ColumnItem>
                        })

                    }
                    <ColumnItem>
                        <Button label={'Editar'} variant={'primary'} onClick={updateItem} />
                        <Button label={'Deletar'} variant={'secondary'} onClick={deleteItem} />
                    </ColumnItem>
                </ItemRow>)
            })}


        </Container>

    );
}
export { Table }