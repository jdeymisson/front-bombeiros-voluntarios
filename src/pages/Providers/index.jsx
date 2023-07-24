import { useState, useEffect, useRef } from "react";
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

const columns2 = [
    {
        title: 'CPF',
        dataIndex: 'cpf',
        key: 'cpf'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Origem',
        dataIndex: 'origin',
        key: 'origin'
    },
    {
        title: 'Horas',
        dataIndex: 'hours',
        key: 'hours'
    }
];

export const Providers = ({ openMenu, setOpenMenu }) => {
    const [openModalActionConfirm, setOpenModalActionConfirm] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [columns, setColumns] = useState(columns2);
    const [dataSource, setDataSource] = useState([]);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [origin, setOrigin] = useState("");
    const [hours, setHours] = useState("");
    const [search, setSearch] = useState("");
    const [idUserAction, setIdUserAction] = useState(undefined);

    const inputRef = useRef();

    const filterSearch = dataSource.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.cpf.includes(search));
    
    const handleChangeAdminColumn = (id_provider) => {
        return (
            <div className="controll-admin">
                <FaPen className="pen-edit"  onClick={() => openModalProfile(id_provider)}/>
                <FaTrash className="trash-user" onClick={() => openModalConfirm(id_provider)}/>
            </div>
        );
    }; 

    const openModalConfirm = (id_provider) => {
        setUserId(id_provider);
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
        
        setModalOpen(false);
        setUserId(undefined);
    };

    
    const fetchData = async () => {
        try {
            const { data } = await api.get("/users");
            let dataUsers = [];
        
            data.forEach((user) => {
                dataUsers.push({
                    key: user.id,
                    cpf: user.cpf,
                    name: user.name,
                    email: user.email,
                });
            });

            if (user.admin) {
                setColumns([
                ...columns2,
                {
                    title: "",
                    dataIndex: "admin",
                    key: "admin",
                },
                ]);
        
                dataUsers.forEach((user) => {
                    user.admin = handleChangeAdminColumn(user.key);
                });
            };
        
            setDataSource(dataUsers);
        } catch (error) {
        console.error("Erro ao buscar dados:", error);
        };
    };

    useEffect(() => {
        inputRef.current.focus();
        fetchData();
    }, []);

    return(
        <Container openmenu={openMenu.toString()}>
            <Menu   
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
            />
            <Header />
            <Content 
                title="Prestadores de serviços" 
            >
                <ConfirmAction
                    text="Você realmente deseja excluir esse prestador?"
                    handleClickCofirm={handleClickCofirm}
                    handleClickCancel={handleClickCancel}
                    openModalActionConfirm={openModalActionConfirm}
                />

                {modalOpen && 
                    <FormComponent
                        setModalOpen={setModalOpen}
                        modalOpen={modalOpen}
                    >
                    <h2>{name}</h2>
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
                        onClick={salvar}
                    />
                    </FormComponent>
                }
                    <InputSearch placeholder="Pesquise pelo usuário" />
                    <div className="btnNewProvider">
                        <ButtonComponent 
                            title="Novo" 
                            color="YELLOW"
                            onClick={openModal}
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
