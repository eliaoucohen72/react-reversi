import "./App.css";

function App() {
  const [isFirstStep, setIsFirstStep] = useState(true);
  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, []);

  const getGridColor = () => "white-grid-item";

  const returnBoard = () =>
    Array.from({ length: 64 }, (_: number, i: number) => {
      return (
        <div className="grid-item">
          <div className={getGridColor()}>{i}</div>
        </div>
      );
    });

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">{returnBoard()}</div>
      </div>
    </div>
  );
}

export default App;
