function add_row() {

  var tbody = document.getElementById('tbody');
  var row = tbody.insertRow(tbody.rows.length);
  if (tbody.rows.length > 8) {
      return alert('더이상 행을 추가할 수 없습니다.');
  }
  var time = row.insertCell(0);
  var per1 = row.insertCell(1);
  var per2 = row.insertCell(2);
  var per3 = row.insertCell(3);

  var start_hour = document.getElementById("start_time_hour").value;
  var start_minute = document.getElementById("start_time_minute").value;
  var times = document.getElementById("time_change").value;
  var hour = Number(start_hour);
  var minute = Number(start_minute);

  var table_start_time_hour = start_hour;
  var table_start_time_minute = Number(start_minute) + Number(times) * Number(tbody.rows.length-1);
  var table_finish_time_hour = start_hour;
  var table_finish_time_minute = Number(start_minute) + Number(times) * Number(tbody.rows.length);

  if (table_start_time_minute >= 60) { // minute이 60이상인 경우
    table_start_time_minute = Number(table_start_time_minute) - 60;
    table_start_time_hour = Number(table_start_time_hour) + 1;
  }
  if (table_finish_time_minute >= 60) {
    table_finish_time_minute = Number(table_finish_time_minute) - 60;
    table_finish_time_hour = Number(table_finish_time_hour) + 1;
  }

  if (table_start_time_minute < 10) // minute이 10이하인 경우
    table_start_time_minute = "0" + table_start_time_minute;
  if (table_finish_time_minute < 10)
    table_finish_time_minute = "0" + table_finish_time_minute; // '0*'으로 표기

  if (table_start_time_minute >= 60) { // 예비용
    table_start_time_minute = Number(table_start_time_minute) - 60;
    table_start_time_hour = Number(table_start_time_hour) + 1;
  }
  if (table_finish_time_minute >= 60) {
    table_finish_time_minute = Number(table_finish_time_minute) - 60;
    table_finish_time_hour = Number(table_finish_time_hour) + 1;
  }

  var table_start_time = table_start_time_hour + ":" + table_start_time_minute;
  var table_finish_time = table_finish_time_hour + ":" + table_finish_time_minute;
  time.innerHTML = table_start_time + " ~ " + table_finish_time;
  per1.innerHTML = "<input type=text>";
  per2.innerHTML = "<input type=text>";
  per3.innerHTML = "<input type=text>";
}

function del_row() {
  var tbody = document.getElementById('tbody');
  if (tbody.rows.length < 1) return;
  tbody.deleteRow(tbody.rows.length-1);
}

$(function(){
   $("#save").click(function() {
        html2canvas($("#captureDiv"), {
            onrendered: function(canvas) {
                canvas.toBlob(function(blob) {
                    saveAs(blob, 'image.jpeg');
                });
            }
        });
    });
  });
