import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const generatePdf = (dados, totalizadores) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const titlePdf = [
        {
            text: "Relatório dos Lançamentos",
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ];

    const contentPdf = [
        [{text: "CPF", style: "tableHeader"}, 
        {text: "Nome", style: "tableHeader"}, 
        {text: "Horas", style: "tableHeader"},
        {text: "Trabalho", style: "tableHeader"}, 
        {text: "Entrada", style: "tableHeader"}, 
        {text: "Saída", style: "tableHeader"}, 
        {text: "Usuário Lançamento", style: "tableHeader"}, 
        {text: "Data Lançamento", style: "tableHeader"}],
    ];

    dados?.forEach(item => {
        contentPdf.push([
            item.cpf,
            item.name,
            item.hours,
            item.work,
            item.entry,
            item.exit,
            item.launch_user,
            item.release_data
        ]);
    });

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ["*", "*", "*", "*", "*", "*", "*", "*"],

                body: contentPdf
            },
            layout: "headerLineOnly"
        }
    ];

    const footer = (currentPage, pageCount) => {
        return [
           {
            text: `${currentPage} / ${pageCount}`,
            alignment: "right",
            fontSize: 9,
            margin: [0, 10, 20, 0]
           }
        ];
    };

    const docDefinitions = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],
        pageOrientation: "landscape", 
        header: [titlePdf],
        content: [details],
        footer: footer
    };

    pdfMake.createPdf(docDefinitions).download();
};