var digitsUnique = function(number){
    number = number + '';
    var takenDigits = '';
    
    for(var i = 0, digit; digit = number[i]; i++){
        for(var j = 0, takenDigit; takenDigit = takenDigits[j]; j++){
            if(digit == takenDigit){
                return false;
            }
        }
        takenDigits += digit;
    }
    
    return true;
};



var sum = 0;

for(var e_n_t=012; e_n_t<988; e_n_t++){
    if(!digitsUnique(e_n_t) || (e_n_t % 17)){
        continue;
    }
    
    numberString = e_n_t + '';
    if(numberString.length == 2){
        numberString = '0' + numberString ;
    }
    
    for(var sev=0; sev < 10; sev++){
        var sNumberString = sev + numberString;
        var s_e_n = parseInt(sNumberString.substring(0,3), 10);
        
        if(!digitsUnique(sNumberString) || (s_e_n % 13)){
            continue;
        }
        
        for(var six=0; six < 10; six++){
            var sixNumberString = six + sNumberString;
            var s_s_e = parseInt(sixNumberString.substring(0,3), 10);
            
            if(!digitsUnique(sixNumberString) || (s_s_e % 11)){
                continue;
            }
        
            for(var five=0; five < 10; five++){
                var fiveNumberString = five + sixNumberString;
                var f_s_s = parseInt(fiveNumberString.substring(0,3), 10);
                
                if(!digitsUnique(fiveNumberString) || (f_s_s % 7)){
                    continue;
                }
            
                for(var four=0; four < 10; four++){
                    var fourNumberString = four + fiveNumberString;
                    var f_f_s = parseInt(fourNumberString.substring(0,3), 10);
                    
                    if(!digitsUnique(fourNumberString) || (f_f_s % 5)){
                        continue;
                    }
                
                    for(var three=0; three < 10; three++){
                        var threeNumberString = three + fourNumberString;
                        var t_f_f = parseInt(threeNumberString.substring(0,3), 10);
                        
                        if(!digitsUnique(threeNumberString) || (t_f_f % 3)){
                            continue;
                        }
                    
                        for(var two=0; two < 10; two++){
                            var twoNumberString = two + threeNumberString;
                            var t_t_f = parseInt(twoNumberString.substring(0,3), 10);
                            
                            if(!digitsUnique(twoNumberString) || (t_t_f % 2)){
                                continue;
                            }
                        
                            for(var one=0; one < 10; one++){
                                var oneNumberString = one + twoNumberString;
                                
                                if(!digitsUnique(oneNumberString)){
                                    continue;
                                }
                            
                                console.log(oneNumberString);
                                sum += parseInt(oneNumberString, 10);
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log('sum: ' + sum);
