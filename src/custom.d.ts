type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt: Date | undefined
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' // success表示成功，duplicated表示内容重复
    save: () => void
    remove: (id: string) => boolean
    update: (id: string,name: string) => 'success' | 'not found' | 'duplicated'
}

interface  Window {
    tagList: Tag[]
    createTag: (name: string) => void
}