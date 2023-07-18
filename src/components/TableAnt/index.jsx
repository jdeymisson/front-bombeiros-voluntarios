
import { Table, Empty } from "antd";
import { Container } from "./styles";

export const TableAnt = ({ columns, dataSource }) => {
    return(
       <Container>
         <Table  
            style={{marginTop: "1.6rem"}}
            bordered
            dataSource={dataSource} 
            columns={columns}
            locale={{
                emptyText: (
                  <Empty
                    description={<span>Não há dados</span>}
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                ),
              }}
        />
       </Container>
    );
};