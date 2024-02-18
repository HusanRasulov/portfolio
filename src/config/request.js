import { collection, getDocs } from "firebase/firestore";
import {db} from './config';

async function call(entity){
    const postCollectionRef = collection(db, entity);
    const res = await getDocs(postCollectionRef);
    return res.docs.map(item => ({id: item.id, ...item.data()}));
}

export default {call};