export default class LocalStorageService {

    static addItem(chave, valor){
        localStorage.setItem(chave, JSON.stringify(valor));
    }

    static obterItem(chave){
        const item = localStorage.getItem(chave);
        return JSON.parse(item);
    }
}