import { Container, ScrollView, HeaderRow, ColumnTitle, ColumnItem, ItemRow } from './table.style';
import { Button } from '../button'


const Table = ({ header, list, updateItem, deleteItem }) => {

    let keys = Object.keys(list[0]? list[0]: {})

    return (
        <Container>
            <HeaderRow>
                {header.map((item) => {
                    return <ColumnTitle>{item}</ColumnTitle>
                })}
            </HeaderRow>
            <ScrollView>


                {list.map((itemObj, index) => {
                    return (<ItemRow key={index} index={index}>
                        {
                            keys.map((item) => {
                                return <ColumnItem>{itemObj[item]}</ColumnItem>
                            })

                        }
                        <ColumnItem>
                            <Button style={{ marginRight: 10 }} label={'Editar'} variant={'primary'} onClick={updateItem} />
                            <Button label={'Deletar'} variant={'secondary'} onClick={deleteItem} />
                        </ColumnItem>
                    </ItemRow>)
                })}


            </ScrollView>
        </Container>

    );
}
export { Table }