window.addEventListener('load', function () {
  var self = this;

  fetch('/src/algo.json').then(res => res.json())
    .then(resp => {
      self.createListWithTemplate(resp.results);
    });
  const runBtn = document.getElementById('run');
  runBtn.addEventListener('click', run);
}, true);

function createListWithTemplate(files) {
  const results = document.getElementById('results');
  files.forEach((file) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(file.name));
    li.addEventListener('click', selectFile);
    li.setAttribute("functionName", file.functionName);
    li.setAttribute("html", file.template);
    li.setAttribute("args", getArgs(file.args));
    results.appendChild(li);
  });
}

function selectFile(event) {
  const target = event.target;
  const filePath = target.getAttribute('html');
  const description = document.getElementById('description');
  description.setAttribute("functionName", target.getAttribute('functionName'));
  description.setAttribute("args", target.getAttribute('args'));
  fetch(filePath).then(res => res.text())
    .then(resp => {
      description.innerHTML = resp;
      document.getElementById('params').value = target.getAttribute('args');
      document.getElementById('returnVal').innerHTML = "";
    });
}

function run() {
  const params = document.getElementById('params').value;
  let args = [];
  if (isJson(params)) {
    let jsonObj = JSON.parse(params);
    if (typeof jsonObj === 'object') {
      let counter = 0;
      for (const property in jsonObj) {
        args[counter] = jsonObj[property];
        counter++;
      }
    } else if (typeof json === 'array') {
      args[0] = json;
    }
  } else {
    args = params.split(',');
  }
  const description = document.getElementById('description');
  const jsFunction = description.getAttribute('functionName');
  let result = window[jsFunction](...args);
  const returnVal = document.getElementById('returnVal');
  returnVal.innerHTML = result;
}

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function getArgs(input) {
  let res;
  if (typeof input === 'object') {
    res = JSON.stringify(input);
  } else {
    res = input;
  }
  return res;
}