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
        title: 'Origem',
        dataIndex: 'origen',
        key: 'origen',
    },
    {
        title: 'Horas',
        dataIndex: 'hours',
        key: 'hours',
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
    const [idProvider, setIdProvider] = useState(undefined);

    const inputRef = useRef();

    const filterSearch = dataSource.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.cpf.includes(search));
    
    const { user } = useAuth();
    
    const handleChangeAdminColumn = (id_provider) => {
        return (
            <div className="controll-admin">
                <FaPen className="pen-edit"  onClick={() => openModalProfile(id_provider)}/>
                <FaTrash className="trash-user" onClick={() => openModalConfirm(id_provider)}/>
            </div>
        );
    };  

    const openModalConfirm = async(id_provider) => {
        setOpenModalActionConfirm(true);
     setIdProvider(id_provider);
    };
    
    const openModalProfile = async(id_provider) => {
        setModalOpen(true);

       if(typeof id_provider == "number"){
        const {data: provider} = await api.get(`/providers/${id_provider}`);

        setIdProvider(id_provider);
        setCpf(provider.cpf);
        setName(provider.name);
        setOrigin(provider.origin);
        setHours(provider.hours);
        setIdProvider(provider.id);
       };
    };

    const handleClickCofirm = async () => {
        await deleteUser();
    };

    const handleClickCancel = () => {
        setOpenModalActionConfirm(false);
    };

    const deleteUser = async () => {
        await api.delete(`/providers/${idProvider}`);
        fetchData();
        setOpenModalActionConfirm(false);
    };
    
    useEffect(() => {
        if(!modalOpen) {
            setCpf("");
            setName("");
            setOrigin("");
            setHours(0);
            setIdProvider("");
        };

    }, [modalOpen])

    const salvarProvider = async () => {
        try{
            if(cpf && name && origin && hours && idProvider === ""){
                const response = await api.post("/providers", {cpf, name, origin, hours, idProvider});
    
                if(response.status === 201) {
                    alert(response.data.message)
                };
            } else {
                const response = await api.put("/providers", {cpf, name, origin, hours, idProvider});
            
                if(response.status === 200) {
                    alert(response.data.message)
                };    
            }

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
            const { data } = await api.get("/providers");
            let dataProviders = [];
        
            data.forEach((provider) => {
                dataProviders.push({
                    key: provider.id,
                    cpf: provider.cpf,
                    name: provider.name,
                    origin: provider.origin,
                    hours: provider.hours
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
        
                dataProviders.forEach((provider) => {
                    provider.admin = handleChangeAdminColumn(provider.key);
                });
            };
        
            setDataSource(dataProviders);
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
                title="Prestadores">
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
                            title="Nome"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                        <InputComponent
                            id="origin"
                            type="text"
                            placeholder="Presídio"
                            title="Origem"
                            value={origin}
                            onChange={({ target }) => setOrigin(target.value)}
                        />
                        <InputComponent
                            id="hours"
                            type="number"
                            title="Horas"
                            value={hours}
                            onChange={({ target }) => setHours(target.value)}
                            min={0}
                        />

                        <ButtonComponent 
                            title="Salvar" 
                            color="YELLOW"
                            onClick={salvarProvider}
                        />
                    </FormComponent>
                }
                    <InputSearch 
                        placeholder="Pesquise pelo usuário"
                        onChange={({ target }) => setSearch(target.value)}
                        inputRef={inputRef}
                    />
                    {user.admin && <div className="btnNewProvider">
                        <ButtonComponent 
                            title="Novo" 
                            color="YELLOW"
                            onClick={openModalProfile}
                        />
                    </div>}

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
