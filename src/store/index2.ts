import recordListModel from '@/models/recordListModel';
import TagListModel from '@/models/tagListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    // record store
    recordList : recordListModel.fetch(),
    createRecord : (record: RecordItem) => {
        return recordListModel.create(record)
    },
    // tag store
    tagList : TagListModel.fetch(),
    findTag (id: string) {
        return this.tagList?.filter(t => t.id === id)[0]
    },
    createTag : (name: string) => {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
            window.alert('标签名已存在，请重新输入。');
        } else if (message === 'success') {
            window.alert('添加成功');
        }
    },
    removeTag : (id:string) => {
        return tagListModel.remove(id);
    },
    updateTag : (id: string, name: string) => {
        return tagListModel.update(id, name)
    }
}

export default store