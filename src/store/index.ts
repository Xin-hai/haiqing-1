import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex)


const store =  new Vuex.Store({
  state: {
    recordList: [],
    tagList: [] ,
    currentTag: undefined,
    createRecordError: null,
    createTagError: null
  } as RootState ,
  mutations: {
    setCurrentTag(state,id: string){
      state.currentTag =  state.tagList.filter(t => t.id === id)[0]
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record:RecordItem){
      const record2:RecordItem = clone(record)  // 拷贝一份
      record2.createdAt = new Date().toISOString()
      state.recordList.push(record2)
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    },
    fetchTags(state){
       state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
      if(!state.tagList || state.tagList.length === 0){
        store.commit('createTag','服饰')
        store.commit('createTag','餐饮')
        store.commit('createTag','住宿')
        store.commit('createTag','交通')
      }
    },
    createTag (state,name: string)  {
      state.createTagError = null
      const names = state.tagList.map(item=>item.name)
      if(names.indexOf(name)>=0){
        // window.alert('标签名已存在，请重新输入。');
        state.createTagError = new Error('tag name duplicated')
      }else{
        const id = createId().toString()
        state.tagList.push({id:id, name:name})
        store.commit('saveTags')
      }
    },
    saveTags(state){
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    updateTag (state, payload: {id: string, name: string}) {
      const {id, name} = payload
      const idList = state.tagList.map(item => item.id)
      if(idList.indexOf(id) >= 0){
        const names = state.tagList.map(item => item.name)
        if(names.indexOf(name) < 0)
        {
          const tag = state.tagList.find(item => item.id === id)
          tag!.name = name
          store.commit('saveTags')
        }else{
          window.alert('标签名已存在，请重新输入。')
        }
      }
    },
    removeTag  (state,id: string)  {
      let index = -1
      for(let i=0;i<state.tagList.length;i++){
        if(state.tagList[i].id === id){
          index = i
          break
        }
      }
      if(index >=0){
        state.tagList.splice(index, 1)
        store.commit('saveTags')
        router.back()
      }else {
        window.alert('删除失败')
      }
    }
  }
})

export default store