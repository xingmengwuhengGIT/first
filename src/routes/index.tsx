import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import Home from "../pages/home";
import About from "../pages/about";
import {Topics,UserDetail,NewUser} from "../pages/topics";
import StoreCom from "../pages/store";
import {ImmutableCom} from "../pages/immutable";
import {Context} from '../pages/context'
import {ImmerCom} from "../pages/immer";
import {CallbackCom} from "../pages/useCallback";
import {MemoCom} from "../pages/useMemo";
function PageRouters() {
    return (
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="topics" element={<Topics />}>
                        <Route index  element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an invoice</p>
                            </main>
                        } />
                        <Route path=":itemId" element={<UserDetail />} />
                    </Route>
                    <Route path="/store" element={<StoreCom />}></Route>
                    <Route path="/immutable" element={<ImmutableCom />}></Route>
                    <Route path="/context" element={<Context />}></Route>
                    <Route path="/immer" element={<ImmerCom />}></Route>
                    <Route path="/callback" element={<CallbackCom />}></Route>
                    <Route path="/memo" element={<MemoCom />}></Route>
                    <Route path='*' element={<main><p>nothing here</p></main>}></Route>
                </Routes>
    );
}

export default PageRouters;
