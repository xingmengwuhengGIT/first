## 路由传参三种方式
### 1,通过param参数
需要预先在路由中定义好param参数名称
{ path: '/detail/:id/:name', component: Detail }, 然后在页面中使用useParams获取参数

优点：刷新页面，参数不丢失

缺点：1.只能传字符串，传值过多url会变得很长 2. 参数必须在路由上配置

```js
import { useNavigate,useParams } from 'react-router-dom';
const navigate = useLocation();
// 跳转路由   地址栏：/detail/2/zora
navigate('/detail/2/zora')
// 获取路由参数
const params = useParams()  
console.log(params) // {id: "2",name:"zora"}

```
### 2,通过search
优点：刷新页面，参数不丢失

缺点：只能传字符串，传值过多url会变得很长，获取参数需要自定义hooks

```js
import { useNavigate,useSearchParams } from 'react-router-dom';

const navigate = useNavigate();
// 跳转路由   地址栏：/detail/2/zora
navigate('/detail?id=2')
// 获取路由参数
const [searchParams, setSearchParams] = useSearchParams()
console.log(searchParams.get('id')) // 2

```
### 3,通过state
优点：可以传对象

缺点： <HashRouter>刷新页面，参数丢失

```js
import { useLocation,useNavigate } from 'react-router-dom';

let navigate = useNavigate();
navigate('/detail',{state: {
        id: 2
    }})

// 接收
const location = useLocation()
console.log(location.state)

```
