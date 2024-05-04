const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumber-json/",
    reportPath: "./cypress/cucumber-report/",
    displayDuration: true,
    pageTitle: "Testes Automatizados ONErpm",
    reportName: "Relatório de Testes Automatizados ONErpm",
    metadata: {
        browser: {
            name: "Chrome",
            version: "1222",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Informações Adicionais",
        data: [
            { label: "Projeto", value: "Projeto Correios" },
            { label: "Versão do Projeto", value: "1.0.0" },
            { label: "Ambiente", value: "Homologação" },
            { label: "Data de Execução", value: new Date().toLocaleDateString() },
            { label: "Hora de Execução", value: new Date().toLocaleTimeString() },
            { label: "Autor dos Testes", value: "Camila Moura" },
            { label: "Versão Cypress", value: "13.6.6" },
        ],
    },
    staticFilePath: false,
    openReportInBrowser: false,
    saveCollectedJSON: false,
    disableLog: false,
    pageFooter: "<div><p> ONErpm </p></div>",
    plainDescription: false,
    hideMetadata: false,
    displayReportTime: false,
});