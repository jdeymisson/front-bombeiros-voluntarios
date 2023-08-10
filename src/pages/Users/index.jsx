import { useState, useEffect, useRef } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Container } from "./styles";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { FormComponent } from "../../components/Form";
import { ConfirmAction } from "../../components/ConfirmAction";
import { InputSearch } from "../../components/InputSearch";
import { TableAnt } from "../../components/TableAnt";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Select } from "../../components/Select";

import { useAuth } from "../../hooks/authProvider";
import { api } from "../../services/api";

const columns2 = [
    {
        title: 'CPF',
        dataIndex: 'cpf',
        key: 'cpf',
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }
];

export const Users = ({ openMenu, setOpenMenu }) => {
    const [openModalActionConfirm, setOpenModalActionConfirm] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [columns, setColumns] = useState(columns2);
    const [dataSource, setDataSource] = useState([]);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);
    const [search, setSearch] = useState("");
    const [idUserAction, setIdUserAction] = useState(undefined);

    const inputRef = useRef();

    const filterSearch = dataSource.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.cpf.includes(search));
    
    const { user } = useAuth();
    
    const handleChangeAdminColumn = (id_user) => {
        return (
            <div className="controll-admin">
                <FaPen className="pen-edit"  onClick={() => openModalProfile(id_user)}/>
                <FaTrash className="trash-user" onClick={() => openModalConfirm(id_user)}/>
            </div>
        );
    };  

    const openModalConfirm = async(id_user) => {
        if(user.id !== id_user){
            setOpenModalActionConfirm(true);
            setIdUserAction(id_user);
        } else {
            alert("Não é possível excluir seu próprio usuário!");
        };
    };
    
    const openModalProfile = async(id_user) => {
        setModalOpen(true);
        const {data: user} = await api.get(`/users/${id_user}`);
        setCpf(user.cpf);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setAdmin(user.admin);
        setIdUserAction(user.id);
    };

    const handleClickCofirm = async () => {
        await deleteUser();
    };

    const handleClickCancel = () => {
        setOpenModalActionConfirm(false);
    };

    const deleteUser = async () => {
            await api.delete(`/users/${idUserAction}`);
            fetchData();
            setOpenModalActionConfirm(false);
    };

    const updateUser = async () => {
        try{
            const response = await api.put("/users", {cpf, name, email, password, admin, idUserAction});
            
            if(response.status === 200) {
                alert(response.data.message)
            };

            fetchData();
            setModalOpen(false);
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            };
        };
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
                title="Usuários" 
            >
                <ConfirmAction
                    text="Você realmente deseja excluir esse usuário?"
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
                            id="cpf"
                            type="text"
                            placeholder="Ex: 333.444.555-52"
                            title="CPF"
                            value={cpf}
                            onChange={({ target }) => setCpf(target.value)}
                        />
                        <InputComponent
                            id="name"
                            type="text"
                            placeholder="Ex: Johnny"
                            title="Seu nome"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <InputComponent
                            id="email"
                            type="text"
                            placeholder="Ex: bombeiros@gmail.com"
                            title="Email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <InputComponent
                            id="password"
                            type="password"
                            placeholder="********"
                            title="Senha"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Select 
                            onChange={({ target }) => setAdmin( target.value == 1 ? false : true)}
                            options={[
                            {id: 1, description: "Usuário"},
                            {id: 2, description: "Administrador"},
                        ]} 
                            selectedValue={admin}
                        />
                        <ButtonComponent 
                            title="Salvar" 
                            color="YELLOW"
                            onClick={updateUser}
                        />
                    </FormComponent>
                }
                    <InputSearch 
                        placeholder="Pesquise pelo usuário"
                        onChange={({ target }) => setSearch(target.value)}
                        inputRef={inputRef}
                    />

                    <TableAnt 
                        dataSource={search.length ? filterSearch : dataSource}
                        columns={columns}
                        setOpenModalActionConfirm={setOpenModalActionConfirm} 
                        setModalOpen={setModalOpen}
                    />
            </Content>
            <Footer />
        </Container>
    );
};
