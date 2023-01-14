/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from './routes';

export default function App() {
  return (
    <Router>
      <nav>
        <div className="text-red-700 font-extrabold text-9xl">Hello world!</div>
        <ul>
          <li>
            <NavLink to={ROUTES.mejor()} activeClassName="active">
              mejor
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.popular()} activeClassName="active">
              popular
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.nuevo()} activeClassName="active">
              nuevo
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <Switch>
        <Route path="/topics">
          <TopicsRoutes />
        </Route>
        <Route path="/quizzes">
          <QuizRoutes />
        </Route>
      </Switch> */}
    </Router>
  );
}

// function TopicsRoutes() {
//   const match = useRouteMatch();

//   return (
//     <Switch>
//       <Route path={`${match.path}/new`}>
//         <NewTopicForm />
//       </Route>
//       <Route path={`${match.path}/:topicId`}>
//         <Topic />
//       </Route>
//       <Route path={`${match.path}`}>
//         <Topics />
//       </Route>
//     </Switch>
//   );
// }

// function QuizRoutes() {
//   const match = useRouteMatch();

//   return (
//     <Switch>
//       <Route path={`${match.path}/new`}>
//         <NewQuizForm />
//       </Route>
//       <Route path={`${match.path}/:quizId`}>
//         <Quiz />
//       </Route>
//       <Route path={`${match.path}`}>
//         <Quizzes />
//       </Route>
//     </Switch>
//   );
// }
