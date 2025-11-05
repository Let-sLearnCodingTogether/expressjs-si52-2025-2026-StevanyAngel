function SayHello() {
  return <>HELLO REACT JS</>
}

// Contoh react component
function App() {
  return <>
  {/* React Fragment */}
  <SayHello/>
  <SayHello/>
  <SayHello/>
  <SayHello/>
  <div>REACT JS</div>
  <div>REACT JS</div>
  </>
}
export default App;