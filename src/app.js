console.log("src/app.js");
var appRoot = document.getElementById("app");
const app = {
  title: 'React Learning',
  subtitle: 'playground for learning react'
}

let options = [];

const onFormSubmit = (e) => {
  e.preventDefault();
  const optionDOM = e.target.elements.option;
  options.push(optionDOM.value);
  optionDOM.value = "";
  render();
}
const pickOption = () => {
  let randIndex = Math.floor(Math.random() * options.length);
  alert(`${randIndex+1}- ${options[randIndex]}`)
}

const render = () => {
  const template = (
    <React.Fragment>
    <h1> {app.title} </h1>
    <div> {app.subtitle} </div>
    {<ol> {options.map((e,i)=>(<li key={i}> {e} </li>))}</ol>}
  {options.length? (<button onClick={pickOption} >
    what shoud I do
  </button>) : (<p>you don't have any options</p>)}
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>
        Add Option
      </button>
    </form>
    </React.Fragment>
  );
  ReactDOM.render(template, appRoot)
}

render();
