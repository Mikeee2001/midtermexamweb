var schedule = [];

        function createSchedule() {
            var subject = document.getElementById("subject").value;
            var day = document.getElementById("day").value;
            var time = document.getElementById("time").value;
            var room = document.getElementById("room").value;
            var instructor = document.getElementById("instructor").value;

            var newSchedule = {
                subject: subject,
                day: day,
                time: time,
                room: room,
                instructor: instructor
            };

            schedule.push(newSchedule);
            displaySchedule();
            resetForm();
        }

        function displaySchedule() {
            var scheduleTable = document.getElementById("scheduleTable");
            while (scheduleTable.rows.length > 1) {
                scheduleTable.deleteRow(1);
            }

            for (var i = 0; i < schedule.length; i++) {
                var row = scheduleTable.insertRow(i + 1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                cell1.innerHTML = schedule[i].subject;
                cell2.innerHTML = schedule[i].day;
                cell3.innerHTML = schedule[i].time;
                cell4.innerHTML = schedule[i].room;
                cell5.innerHTML = schedule[i].instructor;
                cell6.innerHTML = '<input type="button" value="update" onclick="updateSchedule(' + i + ')">';
                cell7.innerHTML = '<input type="button" value="Delete" onclick="deleteSchedule(' + i + ')">';
            }
        }

        function resetForm() {
            document.getElementById("subject").value = "";
            document.getElementById("day").value = "";
            document.getElementById("time").value = "";
            document.getElementById("room").value = "";
            document.getElementById("instructor").value = "";
        }
        function updateschedule(index){
            schedule.splice(index,1);
            displaySchedule();
        }

        function deleteSchedule(index) {
            schedule.splice(index, 1);
            displaySchedule();
        }