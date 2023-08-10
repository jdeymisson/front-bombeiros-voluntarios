import { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { Container } from "./styles";
import { InputSearchSelect } from "../../components/SearchSelect";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { FormComponent } from "../../components/Form";
import { ConfirmAction } from "../../components/ConfirmAction";
import { ButtonSmall } from "../../components/ButtonSmall";
import { TableAnt } from "../../components/TableAnt";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TextareaComponent } from "../../components/TextArea"
import { useAuth } from "../../hooks/authProvider";
import { api } from "../../services/api";
import { formaterDate } from "../../utils/formaterDate";
import { calcDiffDates } from "../../utils/calcDiffDates";
import { formatTime } from "../../utils/formatTime";
import { validadeEntryAndExit } from "../../utils/fieldValidation";
import {  generatePdf } from "../../utils/generatePdf";

const columns2 = [
    {
        title: "CPF",
        dataIndex: "cpf",
        key: "cpf",
        ellipsis: true
    },
    {
        title: "Nome",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Horas",
        dataIndex: "hours",
        key: "hours",
    },
    {
        title: "Trabalho",
        dataIndex: "work",
        key: "work", 
    },
    {
        title: "Entrada",
        dataIndex: "entry",
        key: "entry",
    },
    {
        title: "Saída",
        dataIndex: "exit",
        key: "exit",
    },
    {
        title: "Usuário Lançamento",
        dataIndex: "launch_user",
        key: "launch_user",
    },
    {
        title: "Data lançamento",
        dataIndex: "release_data",
        key: "release_data",
    }
];

export const Releases = ({ openMenu, setOpenMenu }) => {
    const [dataSource, setDataSource] = useState([]);
    const [search, setSearch] = useState("");
    const [openModalActionConfirm, setOpenModalActionConfirm] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [columns, setColumns] = useState(columns2);
    const [hours, setHours] = useState("0");
    const [missingHours, setMissingHours] = useState(0);
    const [entry, setEntry] = useState("");
    const [exit, setExit] = useState("");
    const [work, setWork] = useState("");
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState(0);
    const [idRelease, setIdRelease] = useState(0);

    const inputRef = useRef();
    const printRefContent = useRef();
    const filterSearch = providers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.cpf.includes(search));
    
    const { user } = useAuth();
    
    const handleChangeAdminColumn = (id_release) => {
        return (
            <div className="controll-admin">
                <FaTrash className="trash-user" onClick={() => openModalConfirm(id_release)}/>
            </div>
        );
    };  

    const openModalConfirm = async(id_release) => {
        setOpenModalActionConfirm(true);
        setIdRelease(id_release);
    };
    
    const openModalWork = async(id_release) => {
        setModalOpen(true); 

        if(typeof id_release == "number"){
            const { data: release } = await api.get(`/time-entries/?id=${id_release}`);
            const dateObjectEntry = new Date(release.entry);
            const utcDateEntry = dateObjectEntry.toISOString().substring(0, 16);
            const dateObjectExit = new Date(release.exit);
            const utcDateExit = dateObjectExit.toISOString().substring(0, 16);

            setWork(release.work);
            setHours(release.hours);
            setEntry(utcDateEntry);
            setExit(utcDateExit);
        }
    };

    const handleClickCofirm = async () => {
        await deleteRelease();
    };

    const handleClickCancel = () => {
        setOpenModalActionConfirm(false);
    };

    const deleteRelease = async () => {
        await api.delete(`/time-entries/${idRelease}`);
        fetchData();
        setOpenModalActionConfirm(false);
    };

    const fetchProviders = async() => {
        const { data: providers } = await api.get(`/providers/`);
        setProviders(providers);
    };

    const saveRealese = async () => {
        try{
            validadeEntryAndExit(entry, exit);

            if(work.length > 0 && hours && provider?.id){
                const dados = { 
                    cpf: provider.cpf, 
                    name: provider.name,
                    entry,
                    exit,
                    hours: formatTime(hours, "minutes"), 
                    provider_id: provider.id, 
                    work, 
                    launch_user: user.name 
                };
            
                const response = await api.post("/time-entries", dados);

                if(response.status === 201) {
                    setModalOpen(false);
                    fetchData();
                    return alert(response.data.message);
                }
            } else {
                throw new Error("Verifique se todos os campos foram preenchidos, todos são obrigatórios!");
            }

            setModalOpen(false);
        } catch(error) {
            if(error) {
                if(error.response){
                    alert(error.response.data.message);
                }else {
                    alert(error);
                }
            }
        }
    };

    const fetchData = async () => {
        try {
            const { data: releases } = await api.get(`/time-entries/${provider.id}`);
            const datareleases = [];
            let hoursPosted = 0;

            releases.forEach((realese) => {
                hoursPosted += realese.hours;

                datareleases.push({
                    key: realese.id,
                    cpf: realese.cpf,
                    name: realese.name,
                    hours: formatTime(realese.hours),
                    entry:formaterDate(realese.entry),
                    exit: formaterDate(realese.exit),
                    work: realese.work,
                    launch_user: realese.launch_user,
                    release_data: formaterDate(realese.created_at)
                });
            });

            const hoursPostedTotal = formatTime(hoursPosted);
            setMissingHours(hoursPostedTotal);

            if (user.admin) {
                setColumns([
                ...columns2,
                {
                    title: "",
                    dataIndex: "admin",
                    key: "admin",
                    width: 72
                },
                ]);
        
                datareleases.forEach((provider) => {
                    provider.admin = handleChangeAdminColumn(provider.key);
                });
            };
        
            setDataSource(datareleases);
        } catch (error) {
        console.error("Erro ao buscar dados:", error);
        };
    }
        
    useEffect(() => {
        if(!modalOpen) {
            setWork("")
            setHours("0");
            setEntry("");
            setExit("");
        }
    }, [modalOpen]);
    
    
    useEffect(() => {
        if(provider?.id > 0) {
            setSearch("");
            fetchData();
        }
    }, [provider])

    useEffect(() => {
            if(entry !== "" && exit !== "") {
                const minutes = calcDiffDates(entry, exit);
                const hours = formatTime(minutes);
                if(minutes > 0) {
                    setHours(hours);
                } 
            }else {
                setHours("0")
            }
    }, [entry, exit, hours]);
    
    useEffect(() => {
        fetchProviders();
    }, []);

    return(
        <Container openmenu={openMenu.toString()}>
            <Menu   
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
            />
            <Header />
            <Content 
                title="Lançamentos">
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
                        <h2>Novo lançamento</h2>
                        <TextareaComponent
                            id="work"
                            placeholder="Ex: Lavou os carros"
                            title="Atividade"
                            maxLength={110}
                            onChange={({ target }) => setWork(target.value)}
                            value={work}
                        />
                        <InputComponent
                            id="time"
                            type="datetime-local"
                            title="Entrada"
                            min="2023-01-01 00:00" 
                            max="9999-12-31 00:00"
                            onChange={({ target }) => setEntry(target.value)}
                            value={entry}
                        />
                        <InputComponent
                            id="time"
                            type="datetime-local"
                            title="Saída"
                            min="2023-01-00 00:00" 
                            max="9999-12-31 00:00"
                            onChange={({ target }) => setExit(target.value)}
                            value={exit}
                        />
                        <InputComponent
                            id="hours"
                            type="text"
                            title="Total horas"
                            value={hours}
                            readOnly
                        />
                        <ButtonComponent 
                            title="Salvar" 
                            color="YELLOW"
                            onClick={saveRealese}
                        />
                    </FormComponent>
                }
                    <InputSearchSelect 
                        placeholder="Pesquise pelo prestador"
                        onChange={({ target }) => setSearch(target.value)}
                        inputRef={inputRef}
                        dataOptions={filterSearch}
                        search={search}
                        setProvider={setProvider}
                        value={search}
                    />

               {provider?.id && 
                <>
                    <div className="btnNewProvider">
                        <div className="utils">
                            <ButtonSmall 
                                title="PDF" 
                                color="YELLOW"
                                onClick={() => generatePdf(dataSource, `Total a pagar: ${formatTime(provider.hours * 60)} / Total de lançamentos: ${missingHours}`)}
                            />
                        </div>
                        <ButtonComponent 
                            title="Novo" 
                            color="YELLOW"
                            onClick={openModalWork}
                        />
                    </div>
                    <div className="totalization">
                        <i>Total a pagar: {formatTime(provider.hours * 60)} / Total de lançamentos: {missingHours}</i>
                    </div>
                    <TableAnt ref={printRefContent}
                        dataSource={dataSource}
                        columns={columns}
                        setOpenModalActionConfirm={setOpenModalActionConfirm} 
                        setModalOpen={setModalOpen}
                    />
                </>}
            </Content>
            <Footer />
        </Container>
    );
};
