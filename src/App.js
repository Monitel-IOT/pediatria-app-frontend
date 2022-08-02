// import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import AppRouter from './routes/AppRouter';

library.add(fab, faCheckSquare, faCoffee, faTrashCan);

const App = () => (<AppRouter />);

export default App;
