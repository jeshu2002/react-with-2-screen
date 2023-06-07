import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomeScreen />}></Route>
      <Route path="/shows/:id" element={<ShowDetailsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;