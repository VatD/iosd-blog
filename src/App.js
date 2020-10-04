import React from "react";
import Layout from "./pages/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    );
}

export default App;
