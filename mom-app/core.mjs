export const CATEGORIES={film:['🎬','影视记录','看过的电影、电视剧、主要演员和自己的感想'],trade:['📈','股票交易','买卖日期、价格、股数和当时为什么操作'],child:['🌱','孩子成长','英语课文、老师说明和成长照片'],future:['📌','将来要用','以后办事会用到的资料、链接、截图和文件']};
export function validateNote(n){return {ok:Boolean(CATEGORIES[n.category]&&(`${n.title||''}${n.body||''}`).trim())}}
export function searchNotes(notes,q){const s=q.trim().toLocaleLowerCase();return s?notes.filter(n=>`${n.title} ${n.body} ${CATEGORIES[n.category]?.[1]||''} ${n.file?.name||''}`.toLocaleLowerCase().includes(s)).sort((a,b)=>b.updatedAt-a.updatedAt):[]}
export function notesInCategory(notes,c){return notes.filter(n=>n.category===c).sort((a,b)=>b.updatedAt-a.updatedAt)}
export function updatedNote(old,patch,now=Date.now()){return {...old,...patch,id:old.id,updatedAt:now}}
