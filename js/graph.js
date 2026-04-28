fetch("../data/heart.csv")
  .then(res => res.text())
  .then(data => {
    let rows = data.split("\n").slice(1);

    let female = [];
    let male = [];

    rows.forEach(row => {
      let cols = row.split(",");
      if (cols.length < 2) return;

      let age = parseInt(cols[0]);
      let gender = cols[1];

      if (gender === "0") female.push(age);
      if (gender === "1") male.push(age);
    });

    let avg = arr => arr.reduce((a,b)=>a+b,0)/arr.length;

    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: ["Females", "Males"],
        datasets: [{
          label: "Average Age",
          data: [avg(female), avg(male)]
        }]
      }
    });
  });