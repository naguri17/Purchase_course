import ListCourse from "./components/ListCourse";
import data from "./constants";

const dataCourse = data.map((item, idx) => {
  ...item, id: idx+ 1;
})

function App() {
  return (
    <div className="App">
      <ListCourse />
    </div>
  );
}

export default App;
