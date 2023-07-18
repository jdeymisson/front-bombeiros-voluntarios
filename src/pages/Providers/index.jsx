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

export const Providers = ({ openMenu, setOpenMenu }) => {
    const [openModalActionConfirm, setOpenModalActionConfirm] = useState(false);
    const [modalProfileOpen, setModalProfileOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [columns, setColumns] = useState(columns2);
    const [dataSource, setDataSource] = useState(data);
    const [userId, setUserId] = useState(undefined);
    
    const handleChangeAdminColumn = (id_user) => {
        return (
            <div className="controll-admin">
            <FaPen className="pen-edit"  onClick={() => openModalProfile(id_user)}/>
            <FaTrash className="trash-user" onClick={() => openModalConfirm(id_user)}/>
            </div>
        );
    };  

    const openModalConfirm = (id_user) => {
        setUserId(id_user);
        setOpenModalActionConfirm(true);
    };
    
    const openModalProfile = (id_user) => {
        setUserId(id_user);
        setModalProfileOpen(true);
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
        setModalProfileOpen(false);
        setUserId(undefined);
    };

    useEffect(() => {
        if(isAdmin) {
            setColumns([...columns, {
            title: 'teste',
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
                title="Prestadores" 
            >
                <ConfirmAction
                    text="Você realmente deseja excluir esse usuário?"
                    handleClickCofirm={handleClickCofirm}
                    handleClickCancel={handleClickCancel}
                    openModalActionConfirm={openModalActionConfirm}
                />

                {modalProfileOpen && 
                    <FormComponent
                        setModalProfileOpen={setModalProfileOpen}
                        modalProfileOpen={modalProfileOpen}
                    >
                    <h2>JOHNNY DEYMISSON</h2>
                    <InputComponent
                        id="name"
                        type="text"
                        placeholder="Ex: Johnny"
                        title="Seu nome"
                    />
                    <InputComponent
                        id="cpf"
                        type="text"
                        placeholder="Ex: 333.444.555-52"
                        title="CPF"
                    />
                    <InputComponent
                        id="email"
                        type="text"
                        placeholder="Ex: bombeiros@gmail.com"
                        title="Email"
                    />
                    <InputComponent
                        id="password"
                        type="password"
                        placeholder="********"
                        title="Senha"
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
                        <ButtonComponent 
                            title="Novo" 
                            color="YELLOW"
                            handleClick={salvar}
                        />
                    </div>
                    <TableAnt 
                        dataSource={dataSource}
                        columns={columns}
                        setOpenModalActionConfirm={setOpenModalActionConfirm} 
                        setModalProfileOpen={setModalProfileOpen}
                    />
            </Content>
            <Footer />
        </Container>
    );
};
