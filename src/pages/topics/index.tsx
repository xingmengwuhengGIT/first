import {FunctionComponent} from "react";
import {Link,NavLink, useParams,useSearchParams,useNavigate} from "react-router-dom";
import {getInvoices,getInvoice,type Invoice} from "./data";

const Topics: FunctionComponent = () => {
    let params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    let invoices = getInvoices()
    const invoice = getInvoice(Number(params.itemId)) || {name: '',number: 0,amount:'',due: ''}
    let navigate = useNavigate()
    return (
        <div className="topics">
            <h2>Topics</h2>
            <div>
                <span>当前param为 {params.itemId}</span>
            </div>
            <div>
                <span>当前search为 {searchParams.get('id') || ''}</span>
            </div>
            <div>
                <input type="text" value={searchParams.get('id') || ''} onChange={
                    (event) => {
                        if (event.target.value){
                            setSearchParams({id: event.target.value})
                        }else {
                            setSearchParams({})}}
                }/>
            </div>
            <button onClick={() => navigate('/about',{state: {id: 123}})}>跳转about</button>
            <ol>
                <li>{'名称:' + invoice.name}</li>
                <li>{'数字:' + (invoice.number || '')}</li>
                <li>{'数量:' + invoice.amount}</li>
                <li>{'日期:' + invoice.due}</li>
            </ol>
            <ul>
                {invoices.map(item =>
                    <li key={item.number}>
                        <NavLink style={({isActive}) => ({margin: '1rem',color: isActive ? 'red': 'blue'})}
                                 to={`/topics/${item.number}/?id=abc`}>{item.name}
                        </NavLink>
                    </li>
                    )}
            </ul>
        </div>
    )
}
export function UserDetail () {
    return (
        <div>
            <h4> user detail</h4>
        </div>
    )
}

export function NewUser () {
    return (
        <div>
            <h4> user detail</h4>
        </div>
    )
}

export {Topics}
