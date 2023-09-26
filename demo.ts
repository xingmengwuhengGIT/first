import {CaseReducers} from "@reduxjs/toolkit/src/createReducer";

const randomHexColor = () => `#${Math.floor(Math.random() * 0xfffffff).toString(16).padEnd(6,'0')}`
console.log(randomHexColor())

interface aProps {
    name: string;
    age: number;
}

type bProps = 'man' | 'woman'
const obj:Record<bProps, aProps> = {
   man: {
       name: '',
       age: 1
   },
    woman: {
       name: '',
        age: 2
    }
}
