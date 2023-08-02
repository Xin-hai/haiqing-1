const localStorageKeyName = 'recordList';

const recordListModel = {
    fetch() {
        console.log(window.localStorage.getItem(localStorageKeyName))
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },
    clone(data: RecordItem | RecordItem[]) {
       return  JSON.parse(JSON.stringify(data))
    }
};

export default recordListModel;