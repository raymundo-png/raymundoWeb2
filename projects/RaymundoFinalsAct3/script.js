$(document).ready(function(){

    $("#changeTitle").click(function(){
        $("#mainTitle").text("Welcome to My Student Profile");
    });

    $("#changeTitle").mouseenter(function(){
        $("#message").text("Mouse entered the Change Title button.");
    });

    $("#changeTitle").mouseleave(function(){
        $("#message").text("Mouse left the Change Title button.");
    });

    $("#hideProfile").click(function(){
        $("#profile").hide(2000);
    });

    $("#showProfile").click(function(){
        $("#profile").show(1000);
    });

    $("#hidestudentTable").click(function(){
        $("#studentTable").hide(2000);
    });

    $("#showstudentTable").click(function(){
        $("#studentTable").show(1000);
    });

    $("#changeTitle").dblclick(function(){
        $("#mainTitle").text("You Double Clicked the button!")
        $(this).css("background","gold")
    })

    $("#changeTitle").click(function(){
        $("#mainTitle").text("You Clicked the button!")
        $(this).css("background","gold")
    })


    $("#courseSelect").change(function(){
        var selectedCourse = $(this).val();

        if(selectedCourse == ""){
            $("#courseResult").text("No course selected.");
            $("#studentCourse").text("BSIT");
            $("#studentTable tbody tr:first .course-cell").text("BSIT");
        }
        else{
            $("#studentCourse").text(selectedCourse);
            $("#studentTable tbody tr:first .course-cell").text(selectedCourse);
            $("#courseResult").text("You selected: " + selectedCourse);
        }
    });

    $("#oddRows").click(function(){
        $("#studentTable tbody tr").removeClass("odd-highlight even-highlight");
        $("#studentTable tbody tr:odd").addClass("odd-highlight");
    });

    $("#evenRows").click(function(){
        $("#studentTable tbody tr").removeClass("odd-highlight even-highlight");
        $("#studentTable tbody tr:even").addClass("even-highlight");
    });

});
