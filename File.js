$(document).ready(() => {
  let i = 0;
  $(".add").click(() => {
    i++;
    let text = $("#in").val().trim();
    if (text !== "") {
      let newItem = $(
        '<div class="task text-[#8E91AB] pt-5 pb-5 pl-4 pr-20 justify-between flex gap-3 text-md  items-center border-white border-b-[1px] border-opacity-[.2] w-full"> <div class="w-[70%]  flex gap-2 items-start "> <input class="w-[1.4vw] mt-[.35rem] rounded-md" id="checkbx" type="checkbox"> <p class="w-full break-words" >' +
          text +
          '</p></div>  <div id="' +
          i +
          '" class=" flex gap-1 pr-3 w-[20%]"> <button class="edit bg-[#000000]   active:ring-2 px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">Edit</button><button class="del bg-[#000000]   active:ring-2 px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">Delete</button></div> </div>'
      );
      $("#list").append(newItem);
      $("#in").val("");
    } else {
      alert("Enter Something");
    }
  });
  $("#list").on("click", ".del", function () {
    let id = $(this).parent().attr("id");
    $("#" + id)
      .parent()
      .remove();
  });
  $("#list").on("click", ".edit", function () {
    $().parent().find("#checkbx").remove();
    let id = $(this).parent().attr("id");
    $("#"+id).parent().find("#checkbx").remove();
    let text = $("#" + id)
      .parent()
      .find("p")
      .text();
    let input = $("<input type=text/> placeholder='Edit the task' ").attr(
      "class",
      "bg-[#191b2a]   rounded-md w-full h-10  outline-none px-4 text-white text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] focus:ring-2"
    );
    let final = input.val(text);
    $("#" + id)
      .parent()
      .find("p")
      .replaceWith(final);
    let save = $(
      '<button class="save bg-[#000000]   active:ring-2 px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">Save</button>'
    );
    $("#" + id)
      .find(".edit")
      .replaceWith(save);
  });
  $("#list").on("click", ".save", function () {
    let id = $(this).parent().attr("id");
    let value = $("#" + id)
      .parent()
      .find("input")
      .val();
    let newItem = $(     '<div class="task text-[#8E91AB] pt-5 pb-5 pl-4 pr-20 justify-between flex gap-3 text-md  items-center border-white border-b-[1px] border-opacity-[.2] w-full"> <div class="w-[70%]  flex gap-2 items-start "> <input class="w-[1.4vw] mt-[.35rem] rounded-md" id="checkbx" type="checkbox"> <p class="w-full break-words" >' +
          value +
          '</p></div>  <div id="' +
          i +
          '" class=" flex gap-1 pr-3 w-[20%]"> <button class="edit bg-[#000000]   active:ring-2 px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">Edit</button><button class="del bg-[#000000]   active:ring-2 px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">Delete</button></div> </div>'

    );
    $("#" + id)
      .parent()
      .replaceWith(newItem);
  });
  $("#list").on("change", "#checkbx", function () {
    if (this.checked) {
       $(this).parent().find("p").attr("class", " line-through break-words w-full");

    }
    else{
        $(this).parent().find("p").attr("class", " no-underline break-words w-full");
    }
  });
  $("#bx").click(function (e) { 
    
    $("#list .line-through").each(function(){
      $("#input").remove();
      let com = $('<h1 class="text-white text-3xl pl-5 pt-2 ">Comleted Tasks :</h1>');
      $("#task1").replaceWith(com)
      $("#list .task").remove();
      let text = $(this).text()
      let new1 =  $('<p class="w-80 break-words text-[4xl] ml-5 mt-4 text-[#c6c0c0] border-b-white">'+text+'</p><br/><hr class="opacity-[.3]"/>')
      $("#list").append(new1)
      let newbtn = $('<button class=" All active:ring-2   mr-3 tracking-wide  bg-[#000000] px-2 py-1 rounded-md text-white transition-all border-black hover: border-2 hover:text-black hover:bg-white ">All</button>')
      $("#bx").replaceWith(newbtn);
    })
  });
  $('#list').on('click','.All', function(e) {
    location.reload()
  })
 
});
