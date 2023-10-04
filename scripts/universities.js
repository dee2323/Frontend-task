let universities = [];
let tBody = document.querySelector('tbody');
const loading = document.getElementById('loading');
const url = 'http://universities.hipolabs.com/search?country=United+States';
///////////////////////////////////////
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        universities = data.slice(0, 20);
        // console.log(universities[9])
        loading.style.display = 'none';
        displayUniversities();
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
///////////////////////////////////////////
function displayUniversities() {
    let result = '';
    universities.forEach(university => {
        result += `
   <tr></tr>
                <td>${university.name}</td>
                <td>${university.country}</td>
                <td>${university.alpha_two_code}</td>
                <td>${university.domains.length}</td>
            </tr>
`
    })
    tBody.innerHTML = result;
}