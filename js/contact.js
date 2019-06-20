jQuery(document).ready(function(e){e("#send").on("click",function(){e(".error").fadeOut("slow")
var r=!1,a=e("input#name").val();(""==a||" "==a)&&(e("#err-name").fadeIn("slow"),r=!0)
var o=/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/,t=e("input#email").val()
if(""==t||" "==t?(e("#err-email").fadeIn("slow"),r=!0):o.test(t)||(e("#err-emailvld").fadeIn("slow"),r=!0),1==r)return e("#err-form").slideDown("slow"),!1
var n=e("#ajax-form").serialize()
return e.ajax({type:"POST",url:e("#ajax-form").attr("action"),data:n,timeout:6e3,error:function(r,a){"timeout"==a?e("#err-timedout").slideDown("slow"):(e("#err-state").slideDown("slow"),e("#err-state").html("An error occurred: "+a))},success:function(){e("#ajax-form").slideUp("slow"),e("#ajaxsuccess").slideDown("slow")}}),!1})})