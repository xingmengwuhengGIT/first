
import {FC,useState} from 'react';
import {Map} from "immutable";

export const ImmutableCom: FC = () => {
    let obj = Map({name: 'abc'})
    const [data,setData] = useState(obj)
    const handleClick = () => {
        setData(obj.set('name','geg'))
    }
    return (
        <>
            <h3>immutable com</h3>
            <>
                <span>当前data:</span>
                <span>{data.get('name')}</span>
            </>
            <div>
                <button onClick={() => handleClick()}>change data</button>
            </div>
        </>
    )
}
