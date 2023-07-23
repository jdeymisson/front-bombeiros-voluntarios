import { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Container } from "./styles";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { FormComponent } from "../../components/Form";
import { ConfirmAction } from "../../components/ConfirmAction";
import { InputSearch } from "../../components/InputSeatch";
import { TableAnt } from "../../components/TableAnt";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TextareaComponent } from "../../components/textArea";
import { ButtonSmall } from "../../components/ButtonSmall";

const data = [
    {
        key: "1",
        name: "Johnny Deymisson",
        age: 28,
        address: "253 Nações",
    },
    {
        key: "2",
        name: "Amanda Maria",
        age: 24,
        address: "73 Centro",
    },
    {
        key: "3",
        name: "John David",
        age: 31,
        address: "253 Nações",
    },
    {
        key: "4",
        name: "Maria Aparecida",
        age: 53,
        address: "253 Nações",
    }
];

const columns2 = [
{
title: 'Name',
dataIndex: 'name',
key: 'name',
},
{
title: 'Age',
dataIndex: 'age',
key: 'age',
},
{
title: 'Address',
dataIndex: 'address',
key: 'address',
}
];

export const Releases = ({ openMenu, setOpenMenu }) => {
    const [openModalActionConfirm, setOpenModalActionConfirm] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [columns, setColumns] = useState(columns2);
    const [dataSource, setDataSource] = useState(data);
    const [userId, setUserId] = useState(undefined);
    
    const handleChangeAdminColumn = (id_user) => {
        return (
            <div className="controll-admin">
                <FaTrash className="trash-user" onClick={() => openModalConfirm(id_user)}/>
            </div>
        );
    };  

    const openModalConfirm = (id_user) => {
        setUserId(id_user);
        setOpenModalActionConfirm(true);
    };
    
    const openModal = (id_user) => {
        setUserId(id_user);
        setModalOpen(true);
    };

    const handleClickCofirm = async () => {
        await deleteProvider(userId);
        setOpenModalActionConfirm(false);
        setUserId(undefined);
    };

    const handleClickCancel = () => {
        setUserId(undefined);
        setOpenModalActionConfirm(false);
    };

    const deleteProvider = async (id_user) => {
        console.log(`Usuário de id: ${id_user}, deletado com sucesso!`);
    };

    const salvar = async () => {
        console.log(`Usuário atualizado com sucesso: ${userId}`);
        setModalOpen(false);
        setUserId(undefined);
    };

    useEffect(() => {
        if(isAdmin) {
            setColumns([...columns, {
            title: '',
            dataIndex: 'teste',
            key: 'teste',
            }]);
    
            data.forEach(usuario => {
                usuario.teste = handleChangeAdminColumn(usuario.key);
            });
        }   setIsAdmin(false);
            setDataSource(data)
        }, []);

    return(
        <Container openmenu={openMenu.toString()}>
            <Menu   
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
            />
            <Header />
            <Content 
                title="Lançamentos" 
            >
                <ConfirmAction
                    text="Você realmente deseja excluir esse lançamento?"
                    handleClickCofirm={handleClickCofirm}
                    handleClickCancel={handleClickCancel}
                    openModalActionConfirm={openModalActionConfirm}
                />

                {modalOpen && 
                    <FormComponent
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                    >
                    <h2>Novo Lançamento</h2>
                    <TextareaComponent
                        id="name"
                        placeholder="Ex: Limou a viatura"
                        title="Seu nome"
                        maxlength={114}
                    />
                    <InputComponent
                        id="hours"
                        type="number"
                        placeholder="Ex: 20"
                        title="Quantidade de horas"
                        min={0}
                    />
                    <ButtonComponent 
                        title="Salvar" 
                        color="YELLOW"
                        handleClick={salvar}
                    />
                    </FormComponent>
                }
                    <InputSearch placeholder="Pesquise pelo usuário" />
                    <div className="btnNewProvider">
                        <div className="utils">
                            <ButtonSmall 
                                title="PDF" 
                                color="YELLOW"
                                handleClick={openModal}
                            />
                            <ButtonSmall 
                                title="XLS" 
                                color="BLACK"
                                handleClick={openModal}
                            />
                        </div>
                        <ButtonComponent 
                            title="Novo" 
                            color="YELLOW"
                            handleClick={openModal}
                        />
                    </div>
                    <TableAnt 
                        dataSource={dataSource}
                        columns={columns}
                        setOpenModalActionConfirm={setOpenModalActionConfirm} 
                        setModalOpen={setModalOpen}
                    />
            </Content>
            <Footer />
        </Container>
    );
};
