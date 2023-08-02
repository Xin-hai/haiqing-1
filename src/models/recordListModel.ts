import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordListModel = {
    data: [] as RecordItem[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(record: RecordItem){
        const record2:RecordItem = clone(record)  // 拷贝一份
        record2.createdAt = new Date()
        this.data.push(record2)
    }
};

export default recordListModel;