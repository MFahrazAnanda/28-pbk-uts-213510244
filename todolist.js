var activities = [];

function addActivity() {
  var activity = document.getElementById("activity").value;
    if (activity !== "") {
      activities.push({name: activity, completed: false});
      updateList();
      document.getElementById("activity").value = "";
      }
    }

function updateList() {
  var list = document.getElementById("activityList");
      list.innerHTML = "";
        for (var i = 0; i < activities.length; i++) {
          var activity = activities[i];
          var node = document.createElement("LI");
          node.innerText = activity.name;
            if (activity.completed) {
              node.classList.add("completed");
            }
          var cancelButton = document.createElement("BUTTON");
          cancelButton.innerText = "Cancel";
          cancelButton.onclick = (function(index) {
            return function() {
              activities.splice(index, 1);
              updateList();
            }
          })(i);
          var completeButton = document.createElement("BUTTON");
          completeButton.innerText = "Complete";
          completeButton.onclick = (function(index) {
            return function() {
              activities[index].completed = true;
              updateList();
            }
          })(i);
          node.appendChild(cancelButton);
          node.appendChild(completeButton);
          list.appendChild(node);
  }
}

function filterUnfinished() {
  var unfinishedActivities = activities.filter(function(activity) {
    return !activity.completed;
      });
      activities = unfinishedActivities;
      updateList();
}