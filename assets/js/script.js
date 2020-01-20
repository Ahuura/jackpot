
        var tab = [];
        tab.push('https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/81/Gambling_and_slot_machine_icons-03-512.png');
        tab.push('https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/78/Gambling_and_slot_machine_icons-04-512.png');
        tab.push('https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/78/Gambling_and_slot_machine_icons-16-512.png');
        tab.push('https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/82/Gambling_and_slot_machine_icons-05-512.png');
        tab.push('https://cdn4.iconfinder.com/data/icons/gambling-and-slot-machine/78/Gambling_and_slot_machine_icons-09-512.png');
 
 
        function alea(){
 
            var img0 = tab[Math.floor((Math.random() * (tab.length - 1)))];
            var img1 = tab[Math.floor((Math.random() * (tab.length - 1)))];
            var img2 = tab[Math.floor((Math.random() * (tab.length - 1)))];
 
            $('#img0').attr('src',img0);
            $('#img1').attr('src',img1);
            $('#img2').attr('src',img2);
 
            if(img0 === img1 && img1 === img2)
            {
                alert('Winner : 1 000 000 $ !');
            }
 
        }
 
        $(document).ready()
        {
            $('#launch').on('click',function(){
                alea();
            });
        }