function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    // setup variables
    var semesterId = document.getElementById('semesterList');
    var option = document.createElement('option');

    // add placeholder option
    option.value = 0;
    option.text = 'Select a semester';
    semesterId.add(option);

    // populate semester list from array
    for (var x = 0;  x < arySemesters.length; x++) {
         opt = document.createElement('option');
         opt.value = arySemesters[x][0];
         opt.text = arySemesters[x][1];
         semesterId.add(opt);
    }
}

function getClass(objSemester) {
    // setup variables
    var semesterId = objSemester.options[objSemester.selectedIndex].value;
    var aryClasses = eval(`ary${semesterId}`);
    var classId = document.getElementById('classList');
    var option = document.createElement('option');

    // populate class list from array
    for (var x = 0;  x < aryClasses.length; x++) {
        opt = document.createElement('option');
        opt.value = aryClasses[x][0];
        opt.text = aryClasses[x][1];
        classId.add(opt);
   }


}

