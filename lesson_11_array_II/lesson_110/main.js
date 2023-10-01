var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var newArray = depthArray.reduce((flatArray, depthItem) => {
  return flatArray.concat(depthItem);
}, [])

console.log(newArray);


// lấy ra các khoá học đưa vào 1 mảng mới.
var topics = [
  {
    topic: "Front-end",
    course:[
      {
        id: 1,
        title: 'HTML, CSS'
      },
      {
        id: 2,
        title: 'JavaScript'
      }
    ]
  },
  {
    topic: "Back-end",
    course:[
      {
        id: 1,
        title: 'Java'
      },
      {
        id: 2,
        title: 'PHP'
      }
    ]
  }
]

var coursesList = topics.reduce((coursesList,topic) => {
    return coursesList.concat(topic.course);
},[])

console.log(coursesList);

var html = coursesList.map((course) => {
  return `
  <div>
    <h2>${course.title}</h1>
    <p>ID: ${course.id}</p>
  </div>`
})
console.log(html.join(''));