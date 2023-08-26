import Card from './components/Card';

function App() {  
    return (
        <div className="App">
            <Card title="Hi!" />
            <hr/>
            <Card text="How are you?" />
            <hr/>
            <Card title="Hi!" text="How are you?" />
        </div>
    );
}

export default App;
