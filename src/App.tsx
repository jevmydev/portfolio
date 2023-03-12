import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";

const HomePage = lazy(() => import("./pages/HomePage"));
const SocialPage = lazy(() => import("./pages/SocialPage"));
const Page404 = lazy(() => import("./pages/Page404"));

const App = () => {
    return (
        <Suspense>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/social" component={SocialPage} />
                <Route component={Page404} />
            </Switch>
        </Suspense>
    );
};

export default App;
