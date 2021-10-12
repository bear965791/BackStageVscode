function doFirst(){
    tableBody = document.getElementById('tableBody')
    tableRow = document.createElement('tr')
    tableRow.className="align-middle"
    title = document.createElement('th')
    title.setAttribute("scope","row")
    title.innerText="tabata爆汗核心健身5"
    classNumber = document.createElement('td')
    classNumber.innerText="class05"

    classTag = document.createElement('td')
    classTag.innerText="上半身"
    
    coach = document.createElement('td')
    coach.innerText="Brian"

    classPrice = document.createElement('td')
    classPrice.innerText="1000"

    timeStamp = document.createElement('td')
    timeStamp.innerText="2021/07/09"

    classStatus = document.createElement('td')
    classStatus.innerText="待審核"

    check = document.createElement('td')
    checkBtn = document.createElement('a')
    checkBtn.setAttribute("href","")
    checkBtn.className="btn btn-outline-dark"
    textBtn = document.createElement('span')
    textBtn.innerText="審核"

    //開始塞標籤
    tableBody.appendChild(tableRow)
    tableRow.appendChild(title)
    tableRow.appendChild(classNumber)
    tableRow.appendChild(classTag)
    tableRow.appendChild(coach)
    tableRow.appendChild(classPrice)
    tableRow.appendChild(timeStamp)
    tableRow.appendChild(classStatus)
    checkBtn.appendChild(textBtn)
    check.appendChild(checkBtn)
    tableRow.appendChild(check)






}

window.addEventListener('load',doFirst);
