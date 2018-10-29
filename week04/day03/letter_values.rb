
$letter_values = {
1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] ,  
2 => ["D", "G"]  ,                             
3 => ["B", "C", "M", "P"]   ,                      
4 => ["F", "H", "V", "W", "Y" ] ,                    
5 => ["K"]                      ,            
6 => ["J", "X"]        ,                       
7 => ["Q", "Z"]                               
}


def get_val(text)
    result = 0
    text= text.upcase.chars

    text.each do |c|

$letter_values.each do |key, val|
if val.include? c
    result += key 
end

    end
    
end
return result
end




p get_val("cabbageq")