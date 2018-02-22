    var $tasksList = $('#tasksList');
    var $taskIn = $('#taskInput');
    var $notification = $('#notification');
    
    var displayNotification = function(){
        if(!$tasksList.children().length){
            $notification.fadeIn('fast');
        }else{
            $notification.css('display','none');
        }
    }
    $('#taskAdd').on('click',function(){
        if(!$taskIn.val()){
            return false;
        }
        $tasksList.append('<li>'+ $taskIn.val() + '<button class="delete">&#10006</button></li>');
        $taskIn.val("");
        displayNotification();
        
        $('.delete').on('click',function(){
            var $parent = $(this).parent();
            
            $parent.css('animation','fadeOut .3 linear');
            
            setTimeout(function(){
                $parent.remove();
                displayNotification();
            },295); 
        })
    })
